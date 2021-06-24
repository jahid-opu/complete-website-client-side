import React from 'react';
import about from '../../../images/about.jpg';
import './About.css'
const About = () => {
    return (
        <section className="py-5 about-section row">
            <div className="col-md-6">
                <div className="p-5 about-img">
                    <img src={about} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-5 mb-5 about-text">
                <h6>WHO WE ARE</h6>
                <h2>We help more than 25 years
                    drive customers clean car.</h2>
                <p>
                    Since opening Mister Car Wash in 1998, owners Petisars and Ken Mathov have been the driving force.<br /><br />
                    Mister wash made its debut in America in 1998, bringing with us a 40 year legacy in the convenience-store and car wash business from across seven states. Far from your typical gas-n-go, we built our brand by giving customers a sense of luxury in a place.
                </p>
                <button className="btn btn-primary">About More</button>
                </div>
            </div>
        </section>
    );
};

export default About;