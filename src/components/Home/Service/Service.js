import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const history = useHistory()
    const handleClick = (id) =>{
        console.log(id);
        const url = `checkout/${id}`;
        history.push(url);
    }
    return (
        <div className="col-md-4">
            <div className="text-center service-card">
                <img style={{ width: "50px" }} src={service.imageURL} alt="" />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button onClick={() => handleClick(service._id)} className="btn btn-primary">Choose Plan for ${service.price}</button>
            </div>
        </div>
    );
};

export default Service;