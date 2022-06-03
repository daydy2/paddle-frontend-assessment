import React from 'react'
import blog33 from './blog3.module.css'
import metricks from '../../images/metricks1.png'
import metricks2 from '../../images/metricks22.jpg'
import propfilePic from '../../images/b7.jpg'
import './blog33.css'
import ContactFooter from '../aboutUs/ContactFooter'

const Blog3 = () => {
    const handleClick = (event) => {
        event.preventDefault()
    }
  return (
    <>
        <main className={blog33.main}>
            <nav className={blog33.navbar}>
                <div className={blog33.navbrand}>
                    <img src={metricks} className={blog33.metricks} alt="company's brand"  />
                   
                </div>
                <div className={blog33.navRight}>
                    <ul className={blog33.navList}>
                        <li className={blog33.navItems}><a to="#">About Us</a></li>
                        <li className={blog33.navItems}><a to="#"></a><span id={blog33.blogSpan}>Blog</span></li>
                        <li className={blog33.navItems}><a to="#"></a>Contact us</li>
                    </ul>
                </div>
            </nav>

            <section className={blog33.sectional1}>
                <div className={blog33.innerRec}></div>
                <div className={blog33.outerRec}></div>
                <article className={blog33.sectionText}>
                    <div className={blog33.paging}>
                        <hr /> <h4>Blog</h4>
                    </div>
                    <p className={blog33.big_desc}>Articles and News</p>
                </article>

            </section>
            <section className={blog33.sectional2}>
                <img src={metricks2} alt="annotations" className={blog33.sectional2Img} />
                <div className={blog33.imgCaption}>
                    <span> October 15, 2019</span>
                    <div className={blog33.profile}>
                        <img src={propfilePic} alt=""  className={blog33.displayAvi}/>
                        <p className={blog33.profileName}>By Paul</p>
                    </div>
                </div>

            </section>
            <section className={blog33.sectional3}>
                <h2 >12 Popup Use Cases To Increase Conversions</h2>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                 sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
                est Lorem ipsum dolor sit amet. 
                </p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                <h4>Table of Contents:</h4>
                <div className={blog33.sectionalTAble}>
                    
                    <div className={blog33.ulDiv1}>
                        <ul className={blog33.sectionalTableUl}>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                        </ul>
                    </div>
                    <div className={blog33.ulDiv2}>
                        <ul className={blog33.sectionalTableUl}>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                            <li className={blog33.listItems}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={blog33.sectional4}>
            <div className={blog33.shareSocial}>
                <p>Share to social media</p>
                <div>
                    <ul className={blog33.listUl}>
                        <li className={blog33.listIcon}><a to="#"><i class="fa-brands fa-2x fa-youtube"></i></a></li>
                        <li className={blog33.listIcon}><a to="#"><i class="fa-brands fa-2x fa-facebook-square"></i></a></li>
                        <li className={blog33.listIcon}><a to="#"><i class="fa-brands fa-2x fa-linkedin"></i></a></li>
                        <li className={blog33.listIcon}><a to="#"><i class="fa-brands fa-2x fa-instagram"></i></a></li>
                        <li className={blog33.listIcon}><a to="#"><i class="fa-brands fa-2x fa-twitter-square"></i></a></li>
                    </ul>
                </div>
            </div>

            </section>
            <section className={blog33.sectional5}>
                <div className={blog33.rect1}></div>
                <div className={blog33.rect2}></div>
                <div className={blog33.sectional5Text}>
                    <p>Do you find this article helpful ? <i class="fa-solid fa-thumbs-up"></i>23 <i class="fa-solid fa-thumbs-down"></i>12</p>
                </div>
            </section >
            <section className={blog33.sectional6}>
                <p className={blog33.sectional6Heading}>Add a comment</p>
                <p className={blog33.sectional6P}>Your email address will not be published. Required fields are marked*</p>
                <form onSubmit={handleClick} >
                    <label for="username"></label>
                    <input type="text" id='username' name='username' placeholder='Name (required)' required />
                    <label for="useremail"></label>
                    <input type="email" name="useremail" id="useremail" placeholder='E-Mail (required)' required/>
                    <label for="comment">Comment</label>
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder='Write your comment here....'></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
            </section>
            <section className={blog33.sectional7}>
                <div className={blog33.rect3}></div>
                <div className={blog33.rect4}></div>
                <div className={blog33.sectional7Text}>
                    <h2>what to know more about Metrics ?</h2>
                    <p>Learn who we are and what drives us.</p>
                    <a to="#">Contact us <i class="fas fa-arrow-right"></i></a>
                </div>
            </section>
            <section className={blog33.sectional8}>
                <div className={blog33.footer}>
                    <ContactFooter />
                </div>
                
            </section>
            
        </main>
    </>
  )
}

export default Blog3