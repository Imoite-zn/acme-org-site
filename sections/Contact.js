import { Title, TitleSm } from "@/components/common/Title"
import React, { useState, useEffect } from "react"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link"


const Notification = ({ message, type }) => (
  <div className={`notification ${type}`}>
    {message}
  </div>
)

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    
    const timeoutDuration = 10000; // 10 seconds
    
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), timeoutDuration)
    );

    try {
      const fetchPromise = fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name, 
          email, 
          number, 
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await Promise.race([fetchPromise, timeoutPromise]);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json()
      setNotification({ message: data.message, type: 'success' })
      // Clear the form fields
      setName('')
      setEmail('')
      setNumber('')
      setMessage('')
    } catch (error) {
      console.error('Error', error)
      setNotification({ message: 'An error occurred. Please try again later.', type: 'error' })
    }
  }

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>0700 122 222</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Nairobi</h3>
                  <span>Bekim House, 1st Floor Suite 1B | 04 Crossway Road, Off Westlands Road |</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>www.acmekenya.org</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>info@acmekenya.org</h3>
                  <span>Career at AcmeKenya.org</span>
                </div>
              </div>
              <ul>
                <li className='icon fb-ic'>
                  <Link href={'https://web.facebook.com/100079465344233/'}><BsFacebook size={25}  /></Link>
                </li>
                <li className='icon wa-ic'>
                  <Link href={'https://api.whatsapp.com/send/?phone=254722258094&text&type=phone_number&app_absent=0'}>
                  <IoLogoWhatsapp size={25} />
                  </Link>
                </li>
                <li className='icon ig-ic'>
                  <Link href={'/'}>
                  <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className='icon li-ic'>
                  <Link href={'/'}>
                  <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Fill out the form below to get our proposal. </p>

              <form onSubmit={onSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input 
                    type='text' 
                    value={name} 
                    onChange={ e => setName(e.target.value) } 
                    placeholder="Name"
                    />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input 
                    type='text' 
                    value={email} 
                    onChange={ e => setEmail(e.target.value) } 
                    placeholder="Email" />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Phone Number</span>
                    <input
                    type='text' 
                    value={number} 
                    onChange={ e => setNumber(e.target.value) } 
                    placeholder="Number" 
                    />
                  </div>
                </div>
                <div className='inputs'>
                  <span>INQUIRY | INFORM US HERE</span>
                  <textarea id="myText" cols='30' rows='10'
                    value={message}
                    onChange={ e => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className='button-primary' >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </>
  )
}

export default Contact
