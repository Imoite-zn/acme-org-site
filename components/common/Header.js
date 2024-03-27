import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <img src="/images/new-logo.jpg" width={'75'} height={'60'}></img>
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              HOME
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              WHO WE ARE
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              TEAM
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              WHAT WE DO
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              NATURAL RESOURCES
            </Link>
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              BLOG
            </Link>
            <Link href='/contact' className= {activeLink}>
            <button className='button-primary'>
              CONTACT
            </button>
            </Link>
          </nav>
          <button className='burger-menu' onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <TfiMenu size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
