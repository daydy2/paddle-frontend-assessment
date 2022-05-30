import React from 'react'
import ContactUs from './contactUs.module.css'
import ComingSoon from "../comingSoon/ComingSoon";

const contactUs = () => {
  return (
    <>
        <main className={ContactUs.main}>
            <section className={ContactUs.firstHalf}>
                <ComingSoon />
            </section>
            <section className={ContactUs.secondHalf}>
                World
            </section>

        </main>
    </>
  )
}

export default contactUs