import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('https://limitless-stream-90752.herokuapp.com/service')
        .then(response =>response.json())
        .then(data =>setServices(data))
    },[])
    return (
        <section className="py-5 px-3 service-section">
            <h2 className="text-center">Our Services</h2>
            <div className="row">
                {
                    services.map((service) => <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;