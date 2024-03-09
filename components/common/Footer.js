import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { IoIosMailOpen, IoLogoWhatsapp } from "react-icons/io";
import CopyrightYear from 'react-copyright-year';

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
              <button className='button-primary'>Request newsletter</button>
            </div>
            <ul>
              <h3>QUICK LINKS</h3>
              <li>
                <Link href='/'>Who We Are</Link>
              </li>
              <li>
                <Link href='/team'>Our Team</Link>
              </li>
              <li>
                <Link href='/'>Our Partners</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>WHAT WE DO</h3>
              <li>
                <Link href='/'>Environmental Conservation</Link>
              </li>
              <li>
                <Link href='/'>Community Driven Development</Link>
              </li>
              <li>
                <Link href='/'>Capacity Building</Link>
              </li>
              <li>
                <Link href='/'>Resilience and Self-Reliance</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='whycliffe.ijackaa@acmekenya.org'>
                    <IoIosMailOpen size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <IoLogoWhatsapp size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span> <CopyrightYear />  ACME. ALL RIGHTS RESERVED.</span>
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
