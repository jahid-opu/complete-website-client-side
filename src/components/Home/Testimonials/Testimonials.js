import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials,setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://limitless-stream-90752.herokuapp.com/testimonials')
        .then(response =>response.json())
        .then(data =>setTestimonials(data))
    },[])
    return (
        <section className="testimonial">
        <div className="testimonial-section container py-5">
            <h2 className="text-center mb-5">Testimonial</h2>
        <div className="row">
            {
                testimonials.map((testimonial => <Testimonial testimonial={testimonial}></Testimonial>))
            }
        </div>
    </div>
    </section>
    );
};

export default Testimonials;