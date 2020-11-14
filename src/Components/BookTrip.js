import React from 'react'
import Banner from './Banner'

const BookTrip = () => {
    return (
        <div className="container" style={{ marginBlockStart: '-90px' }}>
            {/* <Banner/> */}
            <section className="trip-area section_gap" >
                <div className="container"  >
                    <div className="row justify-content-center" style={{width:'1700px', marginLeft:'-200px' }} >
                        <div className="col-lg-7 col-md-10"  >
                            <div className="trip-form-section" style={{height:'1000px', }} >
                                <h1 style={{fontFamily:'Trebuchet MS',fontSize:'50px'}}>Book your desitination </h1>
                                <form
                                    className="trip-form-area trip-page-form trip-form text-right"
                                    id="myForm"
                                    action="mail.html"
                                    method="post"
                                >
                                    <div className="form-group col-md-12" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}>
                                        <div className="form-select">
                                            <select style={{ display: "none" }}>
                                                <option value={1}>Select Packages</option>
                                                <option value={1}>Package 01</option>
                                                <option value={1}>Package 02</option>
                                                <option value={1}>Package 03</option>
                                                
                                            </select>
                                            <div className="nice-select" tabIndex={0}>
                                                <span className="current" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'100px', fontFamily:'Trebuchet MS'}}>Select Packages</span>
                                                <ul className="list" >
                                                    <li data-value={1} className="option selected" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', fontFamily:'Trebuchet MS'}}>
                                                        Select Packages
                                </li>
                                                    <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',fontFamily:'Trebuchet MS'}}>
                                                        Package 01
                                </li>
                                                    <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',  fontFamily:'Trebuchet MS'}}>
                                                        Package 02
                                </li>
                                                    <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',  fontFamily:'Trebuchet MS'}}>
                                                        Package 03
                                </li>
                                                    <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',  fontFamily:'Trebuchet MS'}}>
                                                        Package 04
                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}>
                                        <input
                                            style={{placeholderfontSize:'30px'}}
                                            type="text"
                                            className="form-control"
                                            id="bookid"
                                            name="bookid"
                                            placeholder="Booking Id"
                                            style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'BookingId'"
                                            
                                        />
                                    </div>
                                    <div className="form-group col-md-12" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}>
                                        <input
                                            style={{placeholderfontSize:'30px'}}
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Name'"
                                            
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email Id"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'EmailId'"
                                            style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone number"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Phnone'"
                                            style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input
                                        
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            placeholder="Address"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Adress'"
                                            style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}
                                        />
                                    </div>
                                    <div className="form-group col-md-12" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'70px', fontFamily:'Trebuchet MS'}}>
                                        <div className="form-select">
                                            <select style={{ display: "none" }}>
                                                <option value={1}>Payment Type</option>
                                                <option value={1}>Cash</option>
                                                <option value={1}>Card</option>
                                                <option value={1}>Paytm</option>
                                                
                                            </select>
                                            <div className="nice-select" tabIndex={0}>
                                                <span className="current" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'30px', height:'100px', fontFamily:'Trebuchet MS'}}>Payment Type</span>
                                                <ul className="list" >
                                                <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',  fontFamily:'Trebuchet MS'}}>
                                                        Cash  </li>
                                                 <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',  fontFamily:'Trebuchet MS'}}>
                                                 Card</li>
                                                <li data-value={1} className="option" style={{marginBlockStart: '30px',borderColor:' #cc66ff',fontSize:'20px',  fontFamily:'Trebuchet MS'}}>
                                                        Paytm
                                                        </li>
                                                        </ul>
                                            </div>
                                        </div>
                                    </div>
                                                    
                                    <div className="col-lg-12 text-center">
                                        <button className="primary-btn text-uppercase"
                                        style={{marginBlockStart: '30px',fontSize:'20px', fontFamily:'Trebuchet MS', marginLeft:'400px', width:'200px'}}>
                                            Book
                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>;

        </div>
    )
}

export default BookTrip
