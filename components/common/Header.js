import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)
  const [teamDropdown, setTeamDropdown] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)

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
          <nav className={open? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/"? "activeLink" : "none"}>
              HOME
            </Link>
            
              <Link href='/agency' className={activeLink == "/agency"? "activeLink" : "none"}>
                WHO WE ARE
              </Link>
            <div className="dropdown">
              <Link href='/team' className={activeLink == "/team"? "activeLink" : "none"}>
                TEAM
              </Link>
              <div className="dropdown-content">
                <Link href='/team'>BOARD MEMBERS</Link>
                <Link href='/members'>STAFF</Link>
              </div>
            </div>
            <div className="dropdown">
              <Link href='/services' className={activeLink == "/services"? "activeLink" : "none"}>
                WHAT WE DO
              </Link>
              <div className="dropdown-content">
                <Link href='/services/1'>PUBLIC HEALTH, EDUCATON WATER SANITATION & HYGEINE</Link>
                <Link href='/services/2'>PEACE BUILDING & CONFLICT MANAGEMENT</Link>
                <Link href='/services/3'>RESILIENCE, CLIMATE CHANGE & LIVELIHOODS</Link>
                <Link href='/services/4'>NATURAL RESOURCE MANAGEMENT &  ENERGY</Link>
                <Link href='/services/5'>RESEARCH AND ADVOCACY</Link>
                <Link href='/services/6'>CURRENT PROGRAMMES</Link>
              </div>
            </div>
            <Link href='/blogs' className={activeLink == "/blogs"? "activeLink" : "none"}>
              PARTNERS
            </Link>
            <Link href='/contact' className= {activeLink}>
            <button className='button-primary'>
              CONTACT
            </button>
            </Link>
          </nav>
          <button className='burger-menu' onClick={() => setOpen(!open)}>{open? <AiOutlineClose size={25} /> : <TfiMenu size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header