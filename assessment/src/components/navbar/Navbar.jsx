import React, {useState} from 'react'
import navbar from './navbar.module.css'
import metricks from '../images/metricks-white.png'
import './Navbar.css'


const Navbar = () => {
  const [active, setActive] = useState(false);

  const contactClick = () => {
    setActive(!active)
  }
  const [prone, setProne] = useState('nav__menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const navToggle = () => {
    active === 'nav__menu' 
    ? setProne('nav__menu nav__active') 
    : setProne('nav__menu'); 
    
    // toggler action

    toggleIcon === 'nav__toggler'
    ? setToggleIcon('nav__toggler toggle')
    : setToggleIcon('nav__toggler')
  }

  return (
    <>
        <nav className={navbar.navbar}>
          <div className={navbar.navbrand}>
              <img src={metricks} className={navbar.metricks} alt="company's brand"  />
              <p className={navbar.metricksText}>METRICKS</p>
          </div>
          <div className={navbar.navRight}>
             <ul className={`${prone} ${navbar.navList}`} >
                <li className={navbar.navItems}><a to="#">About Us</a></li>
                <li className={navbar.navItems}><a to="#"></a>Blog</li>
                <li className={navbar.navItems} onclick={contactClick}><a to="#"></a>Contact us</li>
              </ul>
          </div>
          <div onClick = {navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        
        
    </>
  )
}

export default Navbar