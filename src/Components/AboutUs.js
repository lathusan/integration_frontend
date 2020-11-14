import React from 'react'

const AboutUs = () => {
    return (
        <>

<h1 style={{ textAlign: 'center',fontSize:'60px', marginLeft:'-750px', marginBlockStart:'100px' }}>Some words About Us ..</h1>
             <section className="feature-area section_gap_top" style={{ height: '1100px' ,width:'2000px'}} >
                <div className="container" >
                <div className="row align-items-end justify-content-left"  >
                        <div className="col-lg-12">
                        <div className="main_title" style={{ width:'1300px',marginTop:'-80px', marginLeft:'-30px'}}>
                                <h3 style={{fontFamily:'Trebuchet MS',fontSize:'30px',textDecoration:'yes' ,style:'bold',color:'#00004d',fontWeight:'bold'}} >Founded in 1996 in Colombo, TrippyTrip.com has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of TrippyTrip.com’s mission is to make it easier for everyone to experience the world.<br/><br/><br/>

By investing in technology that takes the friction out of travel, TrippyTrip.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, TrippyTrip.com enables properties around the world to reach a global audience and grow their businesses.
<br/><br/><br/>
TrippyTrip.com is available in 43 languages and offers more than 28 million reported accommodation listings, including over 6.2 million homes, apartments, and other unique places to stay. Wherever you want to go and whatever you want to do, TrippyTrip.com makes it easy and supports you with 24/7 customer support.</h3>
                                <span className="title-widget-bg" />
                            </div>
                        </div>
                    </div>
                </div>
                </section>
           
            {/* sec 2 */}
            <div className="cta-area section_gap container" style={{marginBlockStart:'-370px',width:'2000px'}}>
                <div className="container" style={{width:'2000px'}} >
                    <div className="row" >
                        <div className="col-lg-5" >
                    
                            <h1 style={{marginTop:'-60px'}}>Get Ready for Real time Adventures</h1>
                            <p style={{fontFamily:'Trebuchet MS',fontSize:'20px',marginTop:'40px'}}>
                               Whether you’ve just booked or are already enjoying your trip, our Customer Experience Team is available around the clock to answer your questions and advocate on your behalf in more than 40 languages. Make sure to check out our FAQs for travelers.
                        </p>
                            <a href="#" className="primary-btn"  style={{marginTop:'80px',marginBlockStart: '30px',fontSize:'20px', fontFamily:'Trebuchet MS', marginLeft:'200px', width:'300px'}}>
                                Subscribe
                        </a>
                        </div>
                        {/*<div className="offset-lg-1 col-lg-6">
                            <img
                                className="cta-img img-fluid"
                                src={require('../img/about-sec2.png')}
                                alt
                                data-pagespeed-url-hash={411448515}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                            />
</div>*/}
                    </div>
                </div>
               
            </div>
            <br></br>
           
        </>
    )
}
{/*} <section className="section_gap about-area container" style={{marginBlockStart:'-90px'}}>
                <div className="container">
                    <div className="single-about row">
                        <div className="col-lg-4 col-md-6 no-padding about-left">
                            <div className="about-content">
                                <h1>
                                    We Believe <br />
                            that Interior beauty <br />
                            Lasts Long
                        </h1>
                                <p>
                                    inappropriate behavior is often laughed off as “boys will be boys,”
                                    women face higher conduct standards especially in the workplace.
                                    That’s why it’s crucial that as women. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                        </p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 text-center no-padding about-right">
                            <div className="about-thumb">
                                <img
                                    src={require('../img/about-img1.jpg')}
                                    className="img-fluid info-img"
                                    alt
                                    data-pagespeed-url-hash={1742008268}
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                />
                            </div>
                        </div>
                    </div>
                </div>
    </section>*/}

export default AboutUs;
