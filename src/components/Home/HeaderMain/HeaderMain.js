import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="pt-3 row d-flex align-items-center hero-banner">
            <div className="col-md-6 offset-md-1">
                <h6>QUICK AND EASY</h6>
                <h1 className="my-3">IN HURY AND<br/> NEED CAR WASH?</h1>
                <p>Let's Start Enjoy The Freedom Of Unlimited CarWash</p>
                <button className="btn btn-primary">Discover More</button>

            </div>
            <div className="col-md-6">

            </div>
        </main>
    );
};

export default HeaderMain;