import aboutStyles from './about.module.css'


const ContactFooter = () => {

    return(<>
      <div className={aboutStyles.firstFlex}>             
                <a to="#"><i class="fa-brands fa-2x fa-youtube"></i></a>
                <a to="#"><i class="fa-brands fa-2x fa-facebook-square"></i></a>
                <a to="#"><i class="fa-brands fa-2x fa-linkedin"></i></a>
                <a to="#"><i class="fa-brands fa-2x fa-instagram"></i></a>
                <a to="#"><i class="fa-brands fa-2x fa-twitter-square"></i></a>
              </div>
              <div className={aboutStyles.secondFlex}>
                <span className={aboutStyles.footerSpan}><a to="#">Terms of services</a></span>
                <span className={aboutStyles.footerSpan}><a to="#">Privacy policy</a></span>
              </div>
              <div className={aboutStyles.thirdFlex}>
                <span className={`${aboutStyles.footerSpan} ${aboutStyles.copyright}`}>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</span>
              </div>
    </>)
  }
  export default ContactFooter