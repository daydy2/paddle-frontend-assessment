import React from 'react'
import policy from './private.module.css'
import terms from '../tandc/tandc.module.css'
import Navbar from '../../navbar/Navbar'
import ContactFooter from '../aboutUs/ContactFooter'

const Private = () => {
    let data = require('../../privateP.json')
    
  return (
    <>
        <main className={`${policy.main} ${terms.main}`} >
            <Navbar />
            <section className={terms.section1}>
                <div className={terms.rectangle1}></div>
               
                <article className={terms.article}>
                    <h2 className={terms.tandcHeading}>{data[0].heading}</h2>
                    <p className={terms.firstP}>{data[0].desc1}</p>
                    <p >{data[0].desc2}</p>
                    <p >{data[0].desc3}</p>
                    <p >{data[0].desc4}</p>
                    
                </article>
                
                <article className={terms.article}>
                    <h3>{data[1].heading}</h3>
                    <p>{data[1].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[2].heading}</h3>
                    <p>{data[2].desc1}</p>
                    <p>{data[2].desc2}</p>
                    <p>{data[2].desc3}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[3].heading}</h3>
                    <p>{data[3].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[4].heading}</h3>
                    <p>{data[4].desc1}</p>
                    <p className={policy.cookiesText}>{data[4].desc2}</p>
                    <p>{data[4].descX}</p>
                    <p>
                        <ol>
                            <li>{data[4].desc3}</li>
                            <li>{data[4].desc4}</li>
                            <li>{data[4].desc5}</li>
                            <li>{data[4].desc6}</li>
                            <li>{data[4].desc7}</li>
                            <li>{data[4].desc8}</li>
                            <li>{data[4].desc9}</li>
                        </ol>
                    </p>
                    <p className={policy.cookiesText}>{data[4].desc10}</p>
                    <p>{data[4].desc12}</p>
                    <p>
                        <ol>                            
                            <li>{data[4].desc13}</li>
                            <li>{data[4].desc14}</li>
                            <li>{data[4].desc15}</li>
                            <li>{data[4].desc16}</li>
                            <li>{data[4].desc17}</li>
                        </ol>
                    </p>
                </article>

                <article className={terms.article}>
                    <h3>{data[5].heading}</h3>
                    <p>{data[5].desc1}</p>
                    <p>{data[5].desc2}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[6].heading}</h3>
                    <p>{data[6].desc1}</p>
                    <p>
                        <ol>
                            <li>{data[6].desc2}</li>
                            <li>{data[6].desc3}</li>
                            <li>{data[6].desc4}</li>
                            <li>{data[6].desc5}</li>
                            <li>{data[6].desc6}</li>
                        </ol>
                    </p>
                    <p className={policy.legalP}>{data[6].desc7}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[7].heading}</h3>
                    <p>{data[7].desc1}</p>
                    <p>
                        <ol>
                            <li>{data[7].desc2}</li>
                            <li>{data[7].desc3}</li>
                            <li>{data[7].desc4}</li>
                            <li>{data[7].desc5}</li>
                            <li>{data[7].desc6}</li>
                            <li>{data[7].desc7}</li>
                            <li>{data[7].desc8}</li>
                            <li>{data[7].desc9}</li>
                        </ol>
                    </p>
                </article>

                <article className={terms.article}>
                    <h3>{data[8].heading}</h3>
                    <p>{data[8].desc1}</p>
                    <p>
                        <ol>
                            <li>{data[8].desc2}</li>
                            <li>{data[8].desc3}</li>
                            <li>{data[8].desc4}</li>
                        </ol>
                    </p>
                </article>

                <article className={terms.article}>
                    <h3>{data[9].heading}</h3>
                    <p>{data[9].desc1}</p>
                    <p>{data[9].desc2}</p>
                    <p>{data[9].desc3}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[10].heading}</h3>
                    <p>{data[10].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[11].heading}</h3>
                    <p>{data[11].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[12].heading}</h3>
                    <p>{data[12].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[13].heading}</h3>
                    <p>{data[13].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[14].heading}</h3>
                    <p>{data[14].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[15].heading}</h3>
                    <p>{data[15].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[16].heading}</h3>
                    <p>{data[16].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[17].heading}</h3>
                    <p>{data[17].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[18].heading}</h3>
                    <p>{data[18].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[19].heading}</h3>
                    <p>{data[19].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[20].heading}</h3>
                    <p>{data[20].desc1}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[21].heading}</h3>
                    <p>{data[21].desc1}</p>
                    <p>{data[21].desc2}</p>
                </article>

                <article className={terms.article}>
                    <h3>{data[22].heading}</h3>
                    <p>{data[22].desc1}</p>
                </article>
                
            </section>
            <footer className={policy.policyFooter}>
                <ContactFooter />
            </footer>
            
        </main>
    </>
  )
}

export default Private