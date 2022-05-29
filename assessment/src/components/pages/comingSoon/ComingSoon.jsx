import React from 'react'
import Navbar from '../../navbar/Navbar'
import coming from './comingSoon.module.css'

const ComingSoon = () => {
  return (
    <>
      <main className={coming.main}>
        <Navbar />
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
            <div className={`${coming.countdownStyle} ${coming.countdownDays}`}>
              <p className={coming.countdownNumber}>7</p>
              <span className={coming.countdownTag}>Days</span>
            </div>
            <div className={`${coming.countdownStyle} ${coming.countdownMargin} ${coming.countdownHour}`}>
              <p className={coming.countdownNumber}>24</p>
              <span className={coming.countdownTag}>Hours</span>
            </div>
            <div className={`${coming.countdownStyle} ${coming.countdownMargin} ${coming.countdownMin}`}>
              <p className={coming.countdownNumber}>54</p>
              <span className={coming.countdownTag}>Minutes</span>
            </div>
            <div className={`${coming.countdownStyle} ${coming.countdownMargin} ${coming.last} ${coming.countdownSec}`}>
              <p className={coming.countdownNumber}>11</p>
              <span className={coming.countdownTag}>Seconds</span>
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
          <footer>
          <div className= {coming.ellipse4}></div>
          </footer>

      </main>
      

    </>
  )
}

export default ComingSoon