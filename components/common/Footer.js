import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { IoIosMailOpen, IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
               <img src="/images/new-logo.jpg" width={'75'} height={'60'}/>
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+254 700 122 222</h3>
              <br />
              <Link href='/contact'>
              <button className='button-primary'>Request newsletter</button>
              </Link>
            </div>
            <ul>
              <h3>QUICK LINKS</h3>
              <li>
                <Link href='/agency'>Who We Are</Link>
              </li>
              <li>
                <Link href='/team'>Our Team</Link>
              </li>
              <li>
                <Link href='/blogs'>Our Partners</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>WHAT WE DO</h3>
              <li>
                <Link href='/services/3'>Environmental Conservation</Link>
              </li>
              <li>
                <Link href='/services/4'>Community Driven Development</Link>
              </li>
              <li>
                <Link href='/services/2'>Capacity Building</Link>
              </li>
              <li>
                <Link href='/services/5'>Resilience and Self-Reliance</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ATuJsjwmSp3e_RWgO-K9pbjvZdjVJepcTVRmrwcPYoKAvNsd-hDvAWdyYaYuTMfwASlm-beHRX4S&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1829073680%3A1709993330083450&theme=mn'>
                    <IoIosMailOpen size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://api.whatsapp.com/send/?phone=254722258094&text&type=phone_number&app_absent=0'>
                    <IoLogoWhatsapp size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span> © 2024 ACME. LETS MAKE A CHANGE.</span>
            </div>
            <div className='connect'>
              <span>ACME DEVELOPMENT ORGANISATION</span>
              <span> &nbsp; | &nbsp; </span>
              <span>NON - PROFIT</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
