import React from 'react';
import contact from './contactUs.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const contactUs = (props) => {

  const handleClick = (event) => {
    event.preventDefault()
  }
  AOS.init()
  return (
    <>
        <main className={contact.main} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="900">
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
      <div className={contact.sideArrow}>
        <i class="fa-solid fa-2x fa-arrow-right"></i>
      </div>
    </>
  )
}

export default contactUs;