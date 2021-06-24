import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="row">
                <div style={{ background: '#21327E' }} className="col-md-6 call-back">
                    <h2>Request a Call Back</h2>
                    <p>We inspire clients to make their most challenging business decisions. Send us a message or Call Us.</p>
                    <div>
                        <h5>Call for book:
                        8-800-10-500</h5>
                    </div>

                    <h5> Working Hours:

                        09:00-18:00 (Mon-Sat)</h5>

                </div>
                <div className="col-md-6 call-form">
                    <h5>Your Service Request</h5>
                    <select name="slct" id="slct">
                        <option value="1">Auto Detail Wash</option>
                        <option value="2">Supreme Wash</option>
                        <option value="3">Express Wash</option>
                    </select> <br />
                    <label className="me-3"><b>Your Name:</b> <br />
                        <input className="form-control" type="text" />
                    </label>
                    <label><b>Phone Number:</b> <br />
                        <input className="form-control" type="text" />
                    </label><br /><br />
                    <button className="btn btn-primary">Send Request</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;