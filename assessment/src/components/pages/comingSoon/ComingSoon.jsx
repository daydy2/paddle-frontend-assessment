import React, { useState } from 'react'
// import Navbar from '../../navbar/Navbar'
import navbar from '../../navbar/navbar.module.css'
import coming from './comingSoon.module.css'
import metricks from '../../images/metricks-white.png'
import contact from '../../pages/contactUs/contactUs.module.css'
import '../../navbar/Navbar.css'
// import ContactFooter from '../../pages/aboutUs/ContactFooter'

const ComingSoon = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
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
      <main className={coming.main} >
          <nav className={navbar.navbar}>
          <div className={navbar.navbrand}>
              <img src={metricks} className={navbar.metricks} alt="company's brand"  />
              <p className={navbar.metricksText}>METRICKS</p>
          </div>
          <div className={navbar.navRight}>
             <ul className={`${prone} ${navbar.navList}`} >
                <li className={navbar.navItems}><a to="#">About Us</a></li>
                <li className={navbar.navItems}><a to="#"></a>Blog</li>
                <li className={navbar.navItems} onClick={handleClick}><a to="#"></a>Contact us</li>
              </ul>
          </div>
          <div onClick = {navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <div className={coming.ellipse1}></div>
        <section className={coming.landingPageDiv}>
          <p className={coming.landingPageText}>
            Something awesome is coming soon
          </p>
          <div className={coming.landingPageSummary}>
          <p>You all-in-one affliate marketing tracking software <strong>track, automate and optimize</strong> your campaigns.</p>
          </div>
        </section>
        <div className={coming.ellipse2}></div>
        <section className={coming.countdownTimer}>
            
          <div className={coming.column1}>
            <div className={`${coming.countdownStyle} ${coming.countdownM}`}>
              <p className={coming.countdownNumber}>7</p>
              <span className={coming.countdownTag}>Days</span>
            </div>
            <div className={`${coming.countdownStyle} ${coming.countdownMargin} ${coming.countdownHour}`}>
              <p className={coming.countdownNumber}>24</p>
              <span className={coming.countdownTag}>Hours</span>
            </div>
          </div>


        <div className={coming.column2}>
          <div className={`${coming.countdownStyle} ${coming.countdownMargin} ${coming.countdownMin}`}>
              <p className={coming.countdownNumber}>54</p>
              <span className={coming.countdownTag}>Minutes</span>
            </div>
            <div className={`${coming.countdownStyle} ${coming.countdownMargin} ${coming.last} ${coming.countdownSec}`}>
              <p className={coming.countdownNumber}>11</p>
              <span className={coming.countdownTag}>Seconds</span>
            </div>
        </div>
            
            
          </section>
          <section className={coming.loginForm}>
            <form >
              <label for="fName">
                <input type="text" name='fName' id='fName' className={coming.formInput} placeholder='First Name..'/>
              </label>
              <label for="lName">
                <input type="text" name='lName' id='lName' className={coming.formInput} placeholder='Last Name..'/>
              </label>
              <div className={coming.inputSubmit}>
                <label for="email">
                  <input type="email" name='email' id='email' size='25' className={coming.emailInput} placeholder='Enter your email address..'/>
                </label>
                <button type="submit" className={coming.buttonSub}>Join the waiting list</button>
              </div>
              
            </form>
            <div className= {coming.ellipse3}></div>
          </section>
          {active && <ContactUs active={active} arrowChange={handleClick}/>}
          {active? null :<footer>
            {/* <div className={coming.footer}>
              <ContactFooter />
            </div> */}
            
          </footer>}

      </main>
      
    </>
  )
}

export default ComingSoon


const ContactUs = ({active, arrowChange}) => {

  const handleClick = (event) => {
    event.preventDefault()
  }
  // const arrowClick = () => {
  //   setActive(!active)
  // }

  return (
    <>
      <main className={contact.main}>
        <section className={contact.section1}></section>
        <section className={contact.section2}>

          <main className={contact.main1} >
            <div className={contact.textDiv}>
              <p className={contact.contactText}>
                Hey, we are still in the works, but you can send us a message!
              </p>
            </div>
            <div className={contact.divForm}>
              <form className={contact.formFill} onSubmit={handleClick}>
                <label for="fName">First name</label>
                <input name= 'fName' id='fName' type='text' placeholder='Enter your First name'></input>
                <label for="lName">Last name</label>
                <input name='lName' id='lName' type='text' placeholder='Enter your Last name'></input>
                <label for="email">Email address</label>
                <input name='email' id='email' type='email' placeholder='Enter your Email address'></input>
                <label for="text">Tell Us What You Need Help With:</label>
                <textarea name="text" id="text" cols="15" rows="9" placeholder='Enter a Topic, like "Channel Problem..."'></textarea>
                <button type="submit">Send Now</button>
              </form>
            </div>
          </main>

        </section>
      </main> 
        
      <div className={contact.sideArrow} onClick={arrowChange}>
        <i class="fa-solid fa-2x fa-arrow-right"></i>
      </div>
    </>
  )
}

