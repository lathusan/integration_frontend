import React from 'react';

function Footer() {
    return (
        <div style={{ width: '100%' }}>
            <footer>
                <div class="container">
                    <div class="row padd-b">
                        <div class="col-sm-3">
                            <img src="https://previews.123rf.com/images/vitmann/vitmann1902/vitmann190200037/118401644-wave-sea-vector-silhouette-isolated-on-white-background-ocean-symbol-blue-modern-style-of-color-logo.jpg" class="img-responsive" alt="foot-logo" title="foot-logo" style={{ height: '150px', width: '150px', borderRadius: '10px' }} />
                            <p class="des" style={{ textAlign: 'justify' ,fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit condimen-tum tortor, eget ultricies ante luctus sed. Praesent lobortis scelerisque ipsum sed commodo[...]</p>
                        </div>
                        <div class="col-sm-3 contact">
                            <h3>Contact us</h3>
                            <ul class="list-inline">
                                <li>
                                    <div class="inner" style={{ fontSize:'15px'}}><i class="fa fa-home" aria-hidden="true"></i> Address</div>
                                    <div class="in" ><a href="#" style={{ fontSize:'15px'}}> : 123 Lorem  ipsum dolor, Ludhiana, India</a></div>
                                </li><br></br>
                                <br></br>
                                <li>
                                    <div class="inner" style={{ fontSize:'15px'}}><i class="fa fa-phone" aria-hidden="true"></i>Phone No.</div>
                                    <div class="in" ><a href="#" style={{ fontSize:'15px'}}> : (+94)1234578</a></div>
                                </li>
                                <li>
                                    <div class="inner" style={{ fontSize:'15px'}}><i class="fa fa-envelope" aria-hidden="true"></i>Email</div>
                                    <div class="in" ><a href="#" style={{ fontSize:'15px'}}> : Trip@Trippytrip.com</a></div>
                                 </li>
                                <li>
                                    <div class="inner paddleft" style={{ fontSize:'15px'}}>website</div>
                                    <div class="in" ><a href="#" style={{ fontSize:'15px'}}>  : www.Trippytrip.com</a></div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-3 info">
                            <h3 style={{ fontSize:'15px'}}>Information</h3>
                            <ul class="list-inline" >
                                <li style={{ fontSize:'15px'}}><a href="index.html" style={{ fontSize:'15px'}}><i class="fa fa-angle-right" aria-hidden="true"></i>Home</a></li>
                                <li><a href="login.html" style={{ fontSize:'15px'}}><i class="fa fa-angle-right" aria-hidden="true" style={{ fontSize:'15px'}}></i>My Account</a></li>
                                <li><a href="about.html" style={{ fontSize:'15px'}}><i class="fa fa-angle-right" aria-hidden="true"></i>About</a></li>
                                <li><a href="packages.html" style={{ fontSize:'15px'}}><i class="fa fa-angle-right" aria-hidden="true"></i>Packages</a></li>
                                <li><a href="hotel.html" style={{ fontSize:'15px'}}><i class="fa fa-angle-right" aria-hidden="true"></i>Hotels</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-3 insta">
                            <h3>Instagram</h3>
                            <h4 style={{color:'#ffffff'}}>TrippyTrip.Official</h4>
                            <div class="list-inline" style={{ float: 'left' }}>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins1.jpg" class="img-responsive" title="ins1" alt="ins1" /></li>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins2.jpg" class="img-responsive" title="ins2" alt="ins2" /></li>
                            </div>
                            <div class="list-inline" style={{ float: 'left' }}>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins3.jpg" class="img-responsive" title="ins3" alt="ins3" /></li>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins4.jpg" class="img-responsive" title="ins4" alt="ins4" /></li>
                            </div>
                            <div class="list-inline" style={{ float: 'left' }}>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins5.jpg" class="img-responsive" title="ins5" alt="ins5" /></li>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins6.jpg" class="img-responsive" title="ins6" alt="ins6" /></li>
                            </div>
                            <div class="list-inline" style={{ float: 'left' }}>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins7.jpg" class="img-responsive" title="ins7" alt="ins7" /></li>
                                <li><img src="https://wptheme.co.in/travel-html/images/ins8.jpg" class="img-responsive" title="ins8" alt="ins8" /></li>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="powered">
                                <div class="col-sm-6 padd0">
                                    <p>© Copyright 2020. <span>TRIPPYTRIP TOURISM </span> by <a target="_blank" href="https://www.123.com/">The Multimedia Designer</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;