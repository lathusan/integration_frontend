import React, { Component } from 'react'

class FeedBack extends Component {

    constructor(props) {
        super(props)

        this.state = {
            feedback: []
        }
    }


}

const feed = () => {
    return (

        <div className="container">
            <div class="ol-lg-12 ">
                <div class="main_title">
                    <h1 >Feedback</h1>
                    <span class="title-widget-bg"></span>
                </div>
            </div>

{
    this.state.feedback.map(

            <div className="col-lg-12 text-center container " style={{ marginBlockStart: '20px', width: '800px', height: '500px', border: "Solid", borderColor: '#800066', fontFamily: 'Trebuchet MS', fontSize: '30px' }}>
                <br />
                <form
                    className="row contact_form"
                    method="post"
                    id="contactForm"
                    style={{ marginBlockStart: '20px' }}
                    key = {feedback.id}
                >
                    <div className="col-md-6">
                        <div className="form-group" style={{ borderColor: ' #cc66ff', fontSize: '50px', width: '700px', fontFamily: 'Trebuchet MS' }}>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required="required"
                                placeholder="Enter your name"
                                required="required"
                                style={{ marginBlockStart: '20px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                key = {feedback.name}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required="required"
                                placeholder="Enter email address"
                                style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                key = {feedback.emailId}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                required="required"
                                placeholder="Enter Phone Number"
                                style={{ marginBlockStart: '30px', borderColor: ' #cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                key = {feedback.phoneNumber}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                className="form-control"
                                name="message"
                                id="message"
                                rows={2}
                                placeholder="Enter Message"
                                style={{ marginBlockStart: '30px', borderColor: '#cc66ff', fontSize: '20px', width: '700px', fontFamily: 'Trebuchet MS', color: '#00004d' }}
                                key = {feedback.message}
                            />
                        </div>
                        <button
                            type="submit"
                            value="submit"
                            className="primary-btn text-uppercase"
                            style={{ marginBlockStart: '30px', fontSize: '20px', fontFamily: 'Trebuchet MS', marginLeft: '400px', width: '300px' }}
                        >
                            Send Message
                    </button>
                    </div>
                </form>
            </div>
    
    ) 
}

        </div>
    )
}

export default FeedBack
