import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container" style={{ marginBlockStart: '-50px' }}>
                {/* <Banner/> */}
                <section className="trip-area section_gap" >
                    <div className="container"  >
                        <div className="row justify-content-center" style={{ width: '1700px', marginLeft: '-270px' }} >
                            <div className="col-lg-7 col-md-10"  >
                                <div className="trip-form-section" style={{ height: '600px', }} >
                                    <h1 style={{ fontFamily: 'Trebuchet MS', fontSize: '50px' }}>Welcome to Trippytrip </h1>
                                    <div className="col-md-9" style={{ marginBlockEnd: '80px' }}>
                                        <form
                                            className="row contact_form"
                                            action="contact_process.php"
                                            method="post"
                                            id="contactForm"
                                            noValidate
                                        >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter User name"
                                                    style={{ marginBlockStart: '30px', marginLeft: '140px', width: '600px', borderColor: ' #cc66ff', fontSize: '20px', height: '50px', fontFamily: 'Trebuchet MS' }}
                                                /><br />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter Password"
                                                    style={{ marginBlockStart: '30px', marginLeft: '140px', width: '600px', borderColor: ' #cc66ff', fontSize: '20px', height: '50px', fontFamily: 'Trebuchet MS' }}
                                                />
                                            </div>
                                            <div className="col-md-9 ">
                                                <button
                                                    type="submit"
                                                    value="submit"
                                                    className="primary-btn text-uppercase"
                                                    style={{ marginBlockStart: '30px', fontSize: '30px', fontFamily: 'Trebuchet MS', marginLeft: '300px', width: '300px', height: '65px' }}
                                                >
                                                    Log In
                                </button>
                                            </div>
                                            <div className="col-md-9 ">
                                                <button
                                                    type="submit"
                                                    value="submit"
                                                    className="primary-btn text-uppercase"
                                                    style={{ marginBlockStart: '30px', fontSize: '20px', fontFamily: 'Trebuchet MS', marginLeft: '350px', width: '300px' }}
                                                >
                                                    Forget password
                                </button>


                                                <button
                                                    type="submit"
                                                    value="submit"
                                                    className="primary-btn text-uppercase"
                                                    style={{ marginBlockStart: '30px', fontSize: '20px', fontFamily: 'Trebuchet MS', marginLeft: '-850px', width: '300px' }}
                                                >
                                                    <a className="nav-link" href="/register">Create New</a>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Login;
