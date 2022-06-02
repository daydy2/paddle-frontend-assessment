import React from 'react'
import terms from './tandc.module.css'
import Navbar from '../../navbar/Navbar'
import ContactFooter from '../aboutUs/ContactFooter'


const Tandc = () => {
    let json = require('../../tandc.json')
    
    console.log(json[0].heading)
  return (
    <>
        <main className={terms.main} >
            <Navbar />
            <section className={terms.section1}>
                <div className={terms.rectangle1}></div>
               
                <article className={terms.article}>
                    <h2 className={terms.tandcHeading}>{json[0].heading}</h2>
                    <p className={terms.firstP}>{json[0].desc1}</p>
                    <p className={terms.secondP}>{json[0].desc2}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[1].heading}</h3>
                    <p>{json[1].desc1}</p>
                    <p>{json[1].desc2}</p>
                    <p>{json[1].desc3}</p>
                </article>
                <article className={terms.article}>
                    <h3>{json[2].heading} </h3>
                    <p> {json[2].desc1}</p>
                    <p> {json[2].desc2}</p>
                </article>
                <article className={terms.article}>
                    <h3>{json[4].heading}</h3>
                    <p>{json[4].desc1}</p>
                    <p>{json[4].desc2}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[5].heading}</h3>
                    <p>{json[5].desc1}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[6].heading}</h3>
                    <p>{json[6].desc1}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[7].heading}</h3>
                    <p>{json[7].desc1}</p>
                    
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[8].heading}</h3>
                    <p>{json[8].desc1}</p>
                    <p>{json[8].desc2}</p>
                    
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[9].heading}</h3>
                    <p>{json[9].desc1}</p>
                    <p>{json[9].desc2}</p>
                    <p>{json[9].desc3}</p>
                    <p>{json[9].desc4}</p>
                   
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[10].heading}</h3>
                    <p>{json[10].desc1}</p>
                </article>
                <article className={terms.article}>
                    <h3>{json[11].heading}</h3>
                    <p>{json[11].desc1}</p>                                      
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[12].heading}</h3>
                    <p>{json[12].desc1}</p>
                    <p>{json[12].desc2}</p>
                    <p>{json[12].desc3}</p>
                    <p>{json[12].desc4}</p>
                    <p>{json[12].desc5}</p>
                    <p>{json[12].desc6}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[13].heading}</h3>
                    <p>{json[13].desc1}
                        <ol>
                            <li>{json[13].desc2}</li>
                            <li>{json[13].desc3}</li>
                            <li>{json[13].desc4}</li>
                            <li>{json[13].desc5}</li>
                        </ol>
                    </p>
                    <p>{json[13].desc6}</p>
                    <p>{json[13].desc7}</p>
                    <p>{json[13].desc8}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[14].heading}</h3>
                    <p>{json[14].desc1}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3 className={terms.tandcHeading}>{json[15].heading}</h3>
                    <p className={terms.secondP}>{json[15].desc1}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[16].heading}</h3>
                    <p>{json[16].desc1}</p>
                    <p>{json[16].desc2}</p>
                    <p>{json[16].desc3}</p>
                    <p>{json[16].desc4}</p>
                    <p>{json[16].desc5}</p>
                    <p>{json[16].desc6}</p>
                    <p>{json[16].desc7}</p>
                    <p>{json[16].desc8}</p>
                    <p>{json[16].desc9}</p>
                    <p>{json[16].desc10}
                        <ol>
                            <li>{json[16].desc11}</li>
                            <li>{json[16].desc12}</li>
                            <li>{json[16].desc13}</li>
                            <li>{json[16].desc14}</li>
                        </ol>
                    </p>
                    <p>{json[16].desc15}</p>
                    <p>{json[16].desc16}</p>
                    <p>{json[16].desc17}</p>
                    <p>{json[16].desc18}</p>
                    <p>{json[16].desc19}</p>
                    <p>{json[16].desc20}</p>
                    <p>{json[16].desc21}</p>
                    <p>{json[16].desc22}</p>
                    <p>{json[16].desc23}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[17].heading}</h3>
                    <p>{json[17].desc1}</p>
                    <p>{json[17].desc2}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[18].heading}</h3>
                    <p>{json[18].desc1}</p>
                    <p>{json[18].desc2}</p>
                    
                </article>
                <article className={terms.article}>
                    <h3>{json[19].heading}</h3>
                    <p>{json[19].desc1}</p>
                    
                </article>



                 {/* {json.map(data => {return (
                     <article className={terms.article}>
                        <h3>{data.heading}</h3>
                        <p> {data.desc1}</p>
                        <p> {data.desc2}</p>
                        <p> {data.desc3}</p>
                        <p> {data.desc4}</p>
                        <p> {data.desc5}</p>
                        <p> {data.desc6}</p>
                        <p> {data.desc7}</p>
                        <p> {data.desc8}</p>
                        <p> {data.desc9}</p>
                        <p> {data.desc10}</p>
                        <p> {data.desc11}</p>
                        <p> {data.desc12}</p>
                        <p> {data.desc13}</p>
                     </article>
                 ) })} */}
            </section>
            <footer className={terms.tncFooter}>
                <ContactFooter />
            </footer>
            
        </main>
    </>
  )
}

export default Tandc;