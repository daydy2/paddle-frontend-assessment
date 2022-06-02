import React from 'react'
import Navbar from '../../navbar/Navbar'
import aboutStyles from './about.module.css'
import ContactFooter from './ContactFooter'


const About = () => {
  return (
    <>
        
        <main className={aboutStyles.main}>
        <Navbar />
            <div className={aboutStyles.rectangle1}></div>
            <div className={aboutStyles.rectangle2}></div>
            <section className={aboutStyles.pageText}>
              <div className={aboutStyles.paging}>
                <hr /> <h4>ABOUT US</h4>
              </div>
                <p className={aboutStyles.big_desc}>Built for Saas and E-commerce</p>
            </section>
            <section className={aboutStyles.section2}>
              <p className={aboutStyles.small_desc}>Our tools are easy to set up and use with a user friendly dashboard that 
              enables you to set up, launch, 
              automate and manage multi-affiliate campaigns in 5 minutes.</p>
            </section>
            <section className={aboutStyles.section3}>
              <p className={aboutStyles.metricksText}>
                Metricks was developed because just like you, we 
                needed a product that could give us <strong>good value.</strong>
              </p>
            </section>
            
            <div className={aboutStyles.rectangle3}></div>
            <div className={aboutStyles.rectangle4}>                
              <div className={aboutStyles.rectangle4Div}>
                <span className={`${aboutStyles.number} ${aboutStyles.num2}`}>02</span>
                <div className={aboutStyles.lineHeading}>
                  <hr/> <p className={aboutStyles.lineHeadingP}>growing with you</p>
                </div>
                <p className={aboutStyles.rectangle4Text}>
                Leveraging the best technology, we have developed an all-in-one 
                affiliate marketing tracking software, a genius tool to help you track, automate and 
                optimize your influencer campaigns, all from one dashboard.
                </p>
                <p className={aboutStyles.rectangle4_Text}>
                Our team of experts are constantly brainstorming, 
                testing and developing new solutions with only one thing in mind - your 
                business growth. Your success is our success and by giving you the tools you need 
                to scale, we grow as well.
                </p>

              </div>
            </div>
            <div className={aboutStyles.rectangle4Div_2}>
            <span className={`${aboutStyles.number} ${aboutStyles.num1}`}>01</span>
            <div className={aboutStyles.lineHeading}>
                <hr/> <p className={aboutStyles.lineHeadingP}>Why us?</p>
                </div>
                <p className={aboutStyles.rectangle4Text}>
                We pride ourselves in our ability to innovate and create 
                world-class tools that provide reliable and efficient touchpoints 
                between advertisers and affiliates.
                </p>
                {/* <div className={aboutStyles.gridDots}>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                </div> */}
                   
            </div>
          <section className={aboutStyles.section}>
            <div className={aboutStyles.rectangle5}></div>
            <div className={aboutStyles.rectangle6}>
                <div className={aboutStyles.textContainer}>
                  <h2>Got a Question?</h2>
                  <p className={aboutStyles.rectangle4_Text}>
                  See how Metricks can help your business grow with best affiliate marketing tracking software.
                  </p>
                  <a to="#">Contact us <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
          </section>
          <footer className={aboutStyles.footer}>
          <ContactFooter />
          </footer>

           
        </main>
    </>
  )
}

export default About

