import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Checkout.css';
const Checkout = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const {id} = useParams();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [order,setOrder] = useState({});

    useEffect(() => {
        const url = `https://limitless-stream-90752.herokuapp.com/service/${id}`
        fetch(url) 
        .then(response=>response.json())
        .then(data =>{
            console.log(data.name, data.price, data.description);
            const orderData = {...loggedInUser,status:'pending',name: data.name, price:data.price, imageURL:data.imageURL, description:data.description};
            setOrder(orderData);
        })
    },[])

    // Send Order Data to Database 
    const handlePayment = (data) =>{
        console.log(order.name);
        fetch('https://limitless-stream-90752.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(result =>{
            console.log(result);
        })
        history.push('/dashboard')
    }
    return (
        <section className="check-out">
        <div className="pt-5 book-form" style={{width:'40%',margin:'auto'}}>
            <h3>Book Now</h3>
            <Form>
            <input className="form-control" id="userName" value={order.userName} {...register("userName")} />
            <br />
            <input className="form-control" id="email" value={order.email} {...register("email")} />
            <br />
            <input className="form-control" id="name" value={order.name} {...register("name")} />
            <br />
            <br/><br/>
           
            <h6>You have to Pay ${order.price} for this service</h6>
        </Form><br/>
        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
            
        </div>
        </section>
    );
};

export default Checkout;