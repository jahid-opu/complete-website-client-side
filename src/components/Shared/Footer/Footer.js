import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="p-5">
            <div className="row">

                <div className="col-md-3">
                    <div className="f-col">
                        <h4>Our Address</h4>
                        <p>Level 13, 2 Elizabeth St,<br />
                            Melbourne, Victoria 3000, Australia</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="f-col">
                        <h4>Opening Hours</h4>
                        <p>Monday – Friday
                            09:00 AM – 06:00 PM	</p>
                        <br />
                        <p>
                            Saturday
                            10:00 AM – 05:00 PM
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="f-col">
                        <h4>650-732-9369</h4>
                        <p>
                            If you have any question, feel free to contact us
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="f-col">
                        <h4> Newsletter</h4>
                        <p>Join our newsletter for latest Updates</p>
                    </div>
                </div>

            </div>
            <hr />
            <p className="text-center"><small>Carwash @ 2021. All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;