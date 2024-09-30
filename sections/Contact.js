import { Title, TitleSm } from "@/components/common/Title"
import React, { useState, useEffect } from "react"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link"

// Notification component
const Notification = ({ message, type }) => (
  <div className={`notification ${type}`}>
    {message}
  </div>
)

const Contact = () => {
  // State management for form fields and notification
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form submission handler
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ message: 'Sending...', type: 'info' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setNotification({ message: data.message, type: 'success' });
      setFormData({ name: '', email: '', number: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setNotification({ message: error.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

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
                    name="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name"
                    required
                    />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input 
                    type='email' 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email"
                    required
                    />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Phone Number</span>
                    <input
                    type='tel' 
                    name="number"
                    value={formData.number} 
                    onChange={handleChange} 
                    placeholder="Number" 
                    />
                  </div>
                </div>
                <div className='inputs'>
                  <span>INQUIRY | INFORM US HERE</span>
                  <textarea 
                  name="message"
                  cols='30' 
                  rows='10'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  ></textarea>
                </div>
                <button type="submit" className='button-primary' disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
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
