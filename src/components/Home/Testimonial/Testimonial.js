import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (

    <div className="col-md-4 mt-5">
    <div className="card d-flex mx-auto ">
        <div className="card-image"> <img className="img-fluid d-flex mx-auto" src={testimonial.photoURL}/> </div>
        <div className="card-text">
        {testimonial.description}
        </div>
        <div className="footer"> <span id="name">{testimonial.name}<br/></span> <span id="position">{testimonial.company}</span> </div>
    </div>
</div>


    
    );
};

export default Testimonial;