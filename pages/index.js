import Head from 'next/head';
import '../styles/styles.scss'
import Particles from '../components/Particles';
import Link from 'next/link';

const pageStyles = {
    minHeight: '100vh',
    position: 'relative'
}


const Index = () => {
    return (
        <div className='particle-container'>
            <Head>
                <meta charSet='utf-8' />
                <title>RichPlayers | Neteller &amp; Skrill VIP Upgrades</title>
                <meta name='description' content={`Free VIP upgrades for your Skrill &amp; Neteller ewallet accounts`} />
                <link rel='canonical' href='https://www.richplayers.co.uk' />
            </Head>
            <div className='hero is-black is-bold is-medium' style={pageStyles}>
                <Particles/>
                <div className='hero-body'>
                    <div className='content'>
                        <img src="/static/images/logo-transparent.png" alt="rich players logo"/>
                        <h1>Exclusively for <span style={{ color: '#DAA520' }}>RichPlayers</span> customers</h1>
                        <h1>Due to our longstanding relationship with <span style={{ color: '#811e68' }}>Skrill</span> &amp; <span style={{ color: '#83ba3b' }}>NETELLER</span></h1>
                        <h1>We have negotiated an <em style={{ textDecoration: 'underline' }}>exclusive</em> deal for all new customers.</h1>
                        <p>* OFFER APPLIES TO NEW <span style={{ color: '#83ba3b' }}>NETELLER</span>/<span style={{ color: '#811e68' }}>Skrill</span> CUSTOMERS ONLY</p>
                        <p>* YOUR ACCOUNT WILL BE UPGRADED WITHIN 24 HOURS OF YOU MAKING YOUR FIRST DEPOSIT</p>
                    </div>
                </div>
            </div>
            <div className='hero is-bold'>
                <div className='hero-body'>
                    <div className='content'>
                        <div className='columns is-centered'>
                            <div className='column'>
                                <img src="/static/images/skrill-logo.png" alt="" style={{ maxHeight: '50px' }}/>
                            </div>
                            <div className='column'>
                                <img src="/static/images/neteller-logo.png" alt="" style={{ maxHeight: '50px' }}/>
                            </div>
                        </div>

                        <div className='columns is-centered'>
                            <div className='column'>
                                <article className='message is-danger' style={{ height: '100%' }}>
                                    <div className="message-header">
                                        <p>Exclusive RichPlayers / Skrill Partnership Deal</p>                                            
                                    </div>
                                    <div className="message-body">
                                        <div className='columns'>
                                            <div className='column is-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                <figure>
                                                    <img src='/static/images/skrill-b.png' alt='neteller BRONZE pro vip upgrade' style={{ maxHeight: '150px' }}/>
                                                </figure>
                                                    <a href='http://wlskrill.adsrv.eacdn.com/C.ashx?btag=a_75418b_3265c_&affid=37901&siteid=75418&adid=3265&c=&aid=521' className='button is-medium is-danger'><span>Get BRONZE VIP <i className='fa fa-check-circle' style={{ color: 'white' }}></i></span>
                                                    </a>
                                                <p className='content is-small'>Please note that VIP upgrade to BRONZE is for new Skrill customers who register via the button above</p>
                                            </div> 
                                            <div className='column' >
                                                <h3>Exclusive RichPlayers / NETELLER Partnership Deal</h3>
                                                <p><span><i className='fa fa-check-circle'></i> Fast Track verification - No deposit required!</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> FREE Instant BRONZE VIP status - usually €6k!</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> 1.45% send money fee</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> Guaranteed limit increase</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> Reduced Forex fees</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> 1.00 reward point/dollar spent</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> VIP status guaranteed for 90 days</span></p>
                                            </div>                                                
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className='column'>
                                <article className='message is-dark' style={{ height: '100%' }}>
                                    <div className="message-header">
                                        <p>Exclusive RichPlayers / NETELLER Partnership Deal</p>                                            
                                    </div>
                                    <div className="message-body">
                                        <div className='columns'>
                                            <div className='column is-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                <figure>
                                                    <img src='/static/images/neteller-BRONZE-pro-large.png' alt='neteller BRONZE pro vip upgrade' style={{ maxHeight: '150px' }}/>
                                                </figure>
                                                    <a href='http://wlneteller.adsrv.eacdn.com/C.ashx?btag=a_75417b_1c_&affid=53&siteid=75417&adid=1&c=&aid=521' className='button is-medium is-dark'><span>Get BRONZE VIP <i className='fa fa-check-circle' style={{ color: 'white' }}></i></span>
                                                    </a>
                                                <p className='content is-small'>Please note that VIP upgrade to BRONZE is for new NETELLER customers who register via the button above</p>
                                            </div> 
                                            <div className='column'>
                                                <h3>Exclusive RichPlayers / NETELLER Partnership Deal</h3>
                                                <p><span><i className='fa fa-check-circle'></i> Fast Track verification - No deposit required!</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> FREE Instant BRONZE Pro VIP status - usually $10k!</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> Fast Track to SILVER VIP - usually $50k!</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> Fast Track to GOLD VIP - usually $100k!</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> Guaranteed limit increase</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> Reduced Forex fees</span></p>
                                                <p><span><i className='fa fa-check-circle'></i> 9,000 Anniversary reward points</span></p>
                                            </div>                                                
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column is-6'>
                                <img src="/static/images/vip-table.png" alt=""/>
                            </div>
                            <div className='column'>
                                <article className='message is-dark'>
                                    <div className="message-header">
                                        <p>Get Your VIP deal</p>                                            
                                    </div>
                                    <div className="message-body" style={{ textAlign: 'left' }}>
                                        <p>The table on the left shows usual VIP requirements at NETELLER.</p>
                                        <p><strong>Note the following:</strong></p>
                                        <ol>
                                            <li>$10,000 Needed for BRONZE</li>
                                            <li>$50,000 Needed for SILVER VIP</li>
                                            <li>$100,000 Needed for GOLD VIP</li>
                                        </ol>
                                        <p><strong>Sign up with RichPlayers and get:</strong></p>
                                        <ol>
                                            <li>BRONZE VIP for <strong>FREE</strong></li>
                                            <li>SILVER VIP for <strong>$7,500</strong></li>
                                            <li>GOLD VIP for <strong>$50,000</strong></li>
                                        </ol>
                                        <p>You get reduced VIP levels ALONG with all the other benefits of VIP memebership.</p>
                                        <a href='http://wlneteller.adsrv.eacdn.com/C.ashx?btag=a_75417b_1c_&affid=53&siteid=75417&adid=1&c=&aid=521' className='button is-medium is-dark'><span>GET BRONZE PRO UPGRADE <i className='fa fa-check-circle' style={{ color: 'white' }}></i></span></a>
                                    </div>
                                </article>
                                <article className='message is-info'>
                                    <div className="message-header">
                                        <p>Follow us to stay updated</p>                                            
                                    </div>
                                    <div className="message-body" style={{ textAlign: 'left' }}>
                                       <div >
                                            <a href='https://www.facebook.com/richerplayers'><img src="/static/images/facebook.svg" style={{ maxWidth: '50px' }} /></a>&nbsp; &nbsp; 
                                            <a href="tel:+447768688886"><img src="/static/images/whatsapp.svg" style={{ maxWidth: '50px' }} /></a>&nbsp; &nbsp; 
                                            <a href='https://www.instagram.com/richerplayers'><img src="/static/images/instagram.svg" style={{ maxWidth: '50px' }} /></a>
                                       </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" display='block'>
                    <path fill="#000" fillOpacity="1" d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,154.7C840,171,960,213,1080,202.7C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            <style jsx>{`
                .particle-container {
                    position: relative; 
                    color: #FFF; 
                    text-align: center; 
                    overflow: hidden;
                }
                hr {
                    background-color: #DAA520
                    margin: 2.5rem 1rem
                }
                .content h1 {
                    color: white
                }
                .content h2 {
                    color: white;
                }
            `}</style>
        </div>
    )
}
 

export default Index;

