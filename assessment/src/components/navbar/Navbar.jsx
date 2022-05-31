import React, {useState} from 'react'
import navbar from './navbar.module.css'
import metricks from '../images/metricks-white.png'


const Navbar = () => {
    const [active, setActive] = useState(false);

  const contactClick = () => {
    setActive(!active)
  }

  return (
    <>
        <nav className={navbar.navbar}>
            <div className={navbar.navbrand}>
                <img src={metricks} className={navbar.metricks} alt="company's brand"  />
                <p className={navbar.metricksText}>METRICKS</p>
            </div>
            <div className={navbar.navRight}>
                <ul className={navbar.navList}>
                    <li className={navbar.navItems}><a to="#">About Us</a></li>
                    <li className={navbar.navItems}><a to="#"></a>Blog</li>
                    <li className={navbar.navItems} onclick={contactClick}><a to="#"></a>Contact us</li>
                </ul>
            </div>
        </nav>
        
        
    </>
  )
}

export default Navbar