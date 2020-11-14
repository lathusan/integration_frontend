import React from 'react'

export const Contact = () => {
    return (
        <>
            <section class="contact_area section_gap container" style={{marginBlockStart:'-80px'}}>
                <div class="container  ">
                    <div className="row">
                        <div className="ol-lg-12">
                            <div className="main_title">
                                <h1>Contact us</h1>
                                <span className="title-widget-bg" />
                            </div>
                        </div>

                    </div>
                    <div className="row ">
                        <div class="ol-lg-12 text-center" style={{marginBlockStart:'-80px'}}>
                            <div id="mapBox" class="" >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.037656743116!2d80.01091709760944!3d9.669957106980036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1604686136197!5m2!1sen!2slk"
                                    width={1140}
                                    height={450}
                                    frameBorder={0}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginBlockStart:'80px'}}>
                        <div className="col-lg-3" >
                            <div className="contact_info" >
                                <div className="info_item" >
                                    <i className="lnr lnr-home" />
                                    <h6 style={{borderColor:' #cc66ff',fontSize:'20px',fcolor:'#00004d'}}>Colombo Srilanka</h6>
                                   
                                </div><br/>
                                <div className="info_item">
                                    <i className="lnr lnr-phone-handset" />
                                    <h6 style={{borderColor:' #cc66ff',fontSize:'20px',fcolor:'#00004d'}}>
                                    
                                        <a href="#">00 (94) 077 6539753</a>
                                    </h6>
                                    <p style={{borderColor:' #cc66ff',fontSize:'20px',fontFamily:'Trebuchet MS', fcolor:'#00004d'}}> Mon to Fri 9am to 6 pm</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-envelope" />
                                    <h6 style={{borderColor:' #cc66ff',fontSize:'20px',fcolor:'#00004d'}}>
                                        <a href="#" style={{borderColor:' #cc66ff',fontSize:'20px',fcolor:'#00004d'}}>support@Trippytrip.com </a>
                                    </h6>
                                    <p style={{borderColor:' #cc66ff',fontSize:'20px',fcolor:'#00004d',fontFamily:'Trebuchet MS' }}>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form
                                className="row contact_form"
                                action="contact_process.php"
                                method="post"
                                id="contactForm"
                                noValidate
                            >
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            style={{borderColor:' #cc66ff',fontFamily:'Trebuchet MS', fontSize:'20px',fcolor:'#00004d'}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter email address"
                                            style={{borderColor:' #cc66ff',fontFamily:'Trebuchet MS', fontSize:'20px',fcolor:'#00004d'}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            placeholder="Enter Subject"
                                            style={{borderColor:' #cc66ff',fontFamily:'Trebuchet MS', fontSize:'20px',fcolor:'#00004d'}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            rows={1}
                                            placeholder="Enter Message"
                                            style={{borderColor:' #cc66ff',fontFamily:'Trebuchet MS', fontSize:'20px',fcolor:'#00004d'}}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button
                                        type="submit"
                                        value="submit"
                                        className="primary-btn text-uppercase"
                                        style={{marginBlockStart: '30px',fontSize:'20px', fontFamily:'Trebuchet MS', marginLeft:'400px', width:'300px'}}
                                    >
                                        Send Message
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
            </section>
        </>

    )
}
