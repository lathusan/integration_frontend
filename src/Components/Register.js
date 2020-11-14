import React from 'react'

const Register = () => {
    return (
        <>
            <div className="container" style={{ marginBlockStart: '-90px' }}>
                {/* <Banner/> */}
                <section className="trip-area section_gap" >
                    <div className="container"  >
                        <div className="row justify-content-center" style={{ width: '1700px', marginLeft: '-200px' }} >
                            <div className="col-lg-7 col-md-10"  >
                                <div className="trip-form-section" style={{ height: '800px', }} >
                                    <h1 style={{ fontFamily: 'Trebuchet MS', fontSize: '50px' }}>Create your Account </h1>

                                    <div class=" justify-content-left">
                                        <div class="ol-lg-12">
                                            <form action="#">
                                                <div className="mt-10">
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        placeholder="First Name"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'First Name'"
                                                        required
                                                        className="single-input"
                                                        style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                                    />
                                                </div>
                                                <div className="mt-10">
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        placeholder="Last Name"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Last Name'"
                                                        required
                                                        className="single-input"
                                                        style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                                    />
                                                </div>
                                                <div className="mt-10">
                                                    <input
                                                        type="email"
                                                        name="EMAIL"
                                                        placeholder="Email address"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Email address'"
                                                        required
                                                        className="single-input"
                                                        style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                                    />
                                                </div>
                                                <div className="mt-10">
                                                    <input
                                                        type="password"
                                                        name="PASSWORD"
                                                        placeholder="Password"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Password'"
                                                        required
                                                        className="single-input"
                                                        style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                                    />
                                                </div>

                                                <div className="input-group-icon mt-10">
                                                    <div className="icon">
                                                        <i className="fa fa-plane" aria-hidden="true" />
                                                    </div>
                                                    <div className="form-select" id="default-select">
                                                        <select style={{ display: "none", marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                            <option value={1} >City</option>
                                                            <option value={1}>Dhaka</option>
                                                            <option value={1}>Dilli</option>
                                                            <option value={1}>Newyork</option>
                                                            <option value={1}>Islamabad</option>
                                                        </select>
                                                        <div className="nice-select" tabIndex={0} style={{ marginBlockStart: '30px', }}>
                                                            <span className="current" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#E6E6FA' }}>City</span>
                                                            <ul className="list" >
                                                                <li data-value={1} className="option selected" style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    City
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Dhaka
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Dilli
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Newyork
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Islamabad
                                    </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-group-icon mt-10">
                                                    <div className="icon">
                                                        <i className="fa fa-globe" aria-hidden="true" />
                                                    </div>
                                                    <div className="form-select" id="default-select">
                                                        <select style={{ display: "none", marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                            <option value={1} style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>Country</option>
                                                            <option value={1} style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>Bangladesh</option>
                                                            <option value={1} style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>India</option>
                                                            <option value={1} style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>England</option>
                                                            <option value={1} style={{ marginBlockStart: '15px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>Srilanka</option>
                                                        </select>
                                                        <div className="nice-select" tabIndex={0} style={{ marginBlockStart: '30px' }} >
                                                            <span className="current" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#E6E6FA' }}>Country</span>
                                                            <ul className="list">
                                                                <li data-value={1} className="option selected" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Country
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Bangladesh
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    India
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    England
                                    </li>
                                                                <li data-value={1} className="option" style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}>
                                                                    Srilanka
                                    </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-center">

                                                    <button className="primary-btn text-uppercase" style={{ marginBlockStart: '50px', fontSize: '20px', fontFamily: 'Trebuchet MS', marginLeft: '-65px', width: '200px' }}>
                                                        Clear
                                </button>
                                                    <button className="primary-btn text-uppercase" style={{ marginBlockStart: '30px', fontSize: '20px', fontFamily: 'Trebuchet MS', marginLeft: '50px', width: '250px' }}>
                                                        Register
                                </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <br /> <br /> <br /> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Register;
