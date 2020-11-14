import React from 'react';

function Home() {
    return (
        <div style={{ width: '100%' }}>
            <section className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center justify-content-center">
                            <div className="banner_content">
                                <h2 style={{ fontFamily: 'Bradley Hand ITC', fontSize: '200px' }}>Trippy Trip</h2>
                                <p style={{ fontFamily: 'Ink Free', fontSize: '30px', textDecoration: 'yes', style: 'bold', color: '#00004d', fontWeight: 'bold' }}>Pick your favorite destination......</p>
                                <input type="text" placeholder="    Search.." style={{ fontFamily: 'Ink Free', fontSize: '25px', height: '50px', width: '500px', borderRadius: '30px', marginBlockStart: '80px', border: 'none' }}></input>
                                <button style={{ fontFamily: 'Ink Free', height: '50px', style: '900', width: '80px', borderRadius: '30px', fontSize: '30px' }}>Go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-area section_gap_top" style={{ height: '1100px', width: '2000px' }}>
                <div className="container" >
                    <div className="row align-items-end justify-content-left">
                        <div className="col-lg-12">
                            <div className="main_title" style={{ width: '1300px' }}>
                                <h3 style={{ fontFamily: 'Trebuchet MS', fontSize: '30px', textDecoration: 'yes', style: 'bold', color: '#00004d', fontWeight: 'bold' }} >If you want to explore the world, but also enjoy your well-earned vacation from work, here are our suggestions on how to make the most of your days in various lands and islands.</h3>
                                <span className="title-widget-bg" />
                            </div>
                        </div>
                    </div>
                    <h1 style={{ textAlign: 'center', color: 'purple' }}>Hurry up ! Grab the discounts for your favourite destinations.</h1>
                    <br />
                    <h2 style={{ textAlign: 'center', color: '#FF0080' }}>And also we provide ,</h2>
                </div>
                <div className="row" style={{ marginBlockStart: '70px', width: '1500px', marginLeft: '300px', marginRight: '500px', height: '2000px' }}>

                    <div className="col-lg-4  col-md-6">
                        <div className="single-feature" style={{ border: 'solid', borderColor: '#e6005c', borderRadius: '60px', height: '700px' }}>
                            <div className="feature-details">
                                <h5 style={{ fontFamily: 'Century Gothic', color: '#00004d', fontSize: '30px' }}>Camping</h5>
                                <p style={{ fontFamily: 'Constantia', fontSize: '20px', style: 'bold', color: '#000a70' }}>Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. </p> <br/><br/>
                                <a href="#" className="primary-btn mb-40" style={{ fontSize: '15px' }}>Read More </a>

                            </div>
                            <img style={{ width: '100%', height: '350px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYznLto2EWz63qg3A-C8DDYCuhgELn7xZNEQ&usqp=CAU" ></img>
                        </div>
                    </div>


                    <div className="col-lg-4  col-md-6">
                        <div className="single-feature" style={{ border: 'solid', borderColor: '#994ce6', borderRadius: '60px', height: '700px' }}>
                            <div className="feature-details">
                                <h5 style={{ fontFamily: 'Century Gothic', color: '#00004d', fontSize: '30px' }}>hiking</h5>
                                <p style={{ fontFamily: 'Constantia', fontSize: '20px', style: 'bold', color: '#000a70' }}>The act of setting foot down a path through natural areas provides an unparalleled opportunity to build the human spirit, improve physical fitness, and increase environmental awareness.</p>
                                <a href="#" className="primary-btn mb-40" style={{ fontSize: '15px' }}>Read More </a>
                            </div>
                              <img style={{ width: '100%', height: '350px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvYb1uv3LecVlajT1HEvUzKOfw6bEFXihSGQ&usqp=CAU" ></img>
                        </div>

                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="single-feature" style={{ border: 'solid', height: '700px', borderColor: '#e6005c', borderRadius: '60px' }}>
                            <div className="feature-details">
                                <h5 style={{ fontFamily: 'Century Gothic', color: '#00004d', fontSize: '30px' }}>Surfing</h5>
                                <p style={{ fontFamily: 'Constantia', fontSize: '20px', style: 'bold', color: '#000a70' }}>Surfing is adaptable for all skill and experience levels. Paddling out to catch waves will help build cardiovascular and upper body strength, and popping up into your stance will work your legs and core.</p>
                                <a href="#" className="primary-btn mb-40" style={{ fontSize: '15px' }}>Read More </a>
                            </div>
                            <img style={{ width: '100%', height: '350px' }} src="data:image/jpeg;base64,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" ></img>
                        </div>

                    </div>
                </div>
            </section>

            {/*<section className="feature-area section_gap_top" style={{ height: '960px' ,width:'2000px'}}>
                <div className="container" >
                    <div className="row align-items-end justify-content-left" >
                        <div className="col-lg-12">
                            <div className="main_title" style={{ width:'1300px'}}>
                                <h3 style={{fontFamily:'Trebuchet MS',fontSize:'30px',textDecoration:'yes' ,style:'bold',color:'#00004d',fontWeight:'bold'}} >If you want to explore the world, but also enjoy your well-earned vacation from work, here are our suggestions on how to make the most of your days in various lands and islands.</h3>
                                <span className="title-widget-bg" />
                            </div>
                        </div>
                    </div>
                    <h1 style={{ textAlign: 'center', color: 'purple' }}>Hurry up ! Grab the discounts for your favourite destinations.</h1>
                    <br/>
                    <h2 style={{ textAlign: 'center', color: 'purple' }}>And also we provide ,</h2>
                    <div className="row" style={{ marginBlockStart: '70px', width:'1500px' }}>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature" style={{border :'solid',borderColor:'#e6005c'}}>
                                <div className="feature-details">
                                    <h5 style={{fontFamily:'Century Gothic',color: '#00004d',fontSize:'30px'}}>Camping</h5>
                                    <p style={{fontFamily:'Century Gothic',fontSize:'20px',style:'bold', color:'#99004d'}}>Lorem ipsum dolor sit amet, consecter adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <a href="#" className="primary-btn mb-40">Read More >></a>
                                    
                                </div>
                               <ul style={{}}>
                                    <li ><img src="src\img\surf.jpg" ></img></li>
    </ul>
                           } <div className="feature-thumb">
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLceblZSNXjfci8xwoR2ZFXMJw0l6-E_P9mA&usqp=CAU" alt="" style={{ height: '150px', width: '250px' }} />
    </div>
</div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature" style={{border :'solid',borderColor:'#994ce6'}}>
                                <div className="feature-details">
                                    <h5 style={{fontFamily:'Century Gothic',color: '#00004d',fontSize:'30px'}}>Relaxation in the <br />Local Beach Campfire</h5>
                                    <p style={{fontFamily:'Century Gothic',fontSize:'20px',style:'bold', color:'#99004d'}}>Lorem ipsum dolor sit amet, consecter adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <a href="#" className="primary-btn mb-40">Read More</a>
                                </div>
                                <div className="feature-thumb">
                                    <img className="img-fluid" src="https://thebeachclub.spectrumresorts.com/wp-content/uploads/2018/12/campfires_beach_club_resort_gulf_shores_alabama5.jpg" alt="" style={{ height: '150px', width: '230px' }} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature" style={{border :'solid',borderColor:'#e6005c'}}>
                                <div className="feature-details">
                                    <h5 style={{fontFamily:'Century Gothic',color: '#00004d',fontSize:'30px'}}>Forest Exploration <br />with Energy Package</h5>
                                    <p style={{fontFamily:'Century Gothic',fontSize:'20px',style:'bold', color:'#99004d'}}>Lorem ipsum dolor sit amet, consecter adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <a href="#" className="primary-btn mb-40">Read More</a>
                                </div>
                                <div className="feature-thumb">
                                    <img className="img-fluid" src="https://srilankaecotourism.lk/images/activity_img/rain-forest-exploration/11.jpg" alt="" style={{ height: '150px', width: '230px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            <div className="main_title" style={{ marginBlockEnd: '150px' }}>
                <h1 style={{ marginBlockStart: '150px', color: ' #990066' }}>while you using our Application,..</h1>
                <h3 style={{ marginBlockStart: '80px', fontFamily: 'Trebuchet MS', fontSize: '30px', marginLeft: '50px', marginRight: '50px', wordSpacing: '10px', style: 'bold', color: '#00004d' }}> our app may helps to Save your time and money and also we give offers as real time data access. we will Minimize your maintenance cost.24*7 we are interact with customers.always we are Helpful in expansion of your business.we give u Instant reservation or booking facilities of flights, tour packages etc</h3>
            </div>

            <div className="container" style={{ textAlign: 'center', marginBlockEnd: '100px' }}>
                <h2 style={{ marginBlockEnd: '100px' }}>Explore more attractions </h2>
                <div style={{ height: '300px', width: '300px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block' }} >
                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_VDiYr9m_wkXL3hgZKtbm6mRCGVioX0VY2g&usqp=CAU" alt="" style={{ height: '300px', width: '300px,', borderRadius: '50%' }} />
                </div>
                <div style={{ height: '300px', width: '300px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', marginInlineStart: '80px' }} >
                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmaP2Nv2OisYIbOo_CnPqm_8ku0SISBRuwSw&usqp=CAU" alt="" style={{ height: '300px', width: '300px,', borderRadius: '50%' }} />
                </div>
                <div style={{ height: '300px', width: '300px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', marginInlineStart: '80px' }} >
                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbO1fAHM--F4jlxFc8Swv_ggF8JsDVRBZNkA&usqp=CAU" alt="" style={{ height: '300px', width: '300px,', borderRadius: '50%' }} />
                </div>
            </div>

        </div>
    );
}
export default Home;