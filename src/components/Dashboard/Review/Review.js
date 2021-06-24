import React, { useState } from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isSubmited,setIsSubmited] = useState(false);
    const onSubmit = (data) =>{
        const reviewData = {...data,photoURL: loggedInUser.photoURL}
        console.log(reviewData);

        fetch('https://limitless-stream-90752.herokuapp.com/addtestimonial',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(response => response.json())
        .then(data =>setIsSubmited(data))
        document.getElementById("name").value= '';
        document.getElementById("description").value= '';
        document.getElementById("company").value= '';
    }
    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 pt-5">
                <div style={{width:'50%',margin:'auto'}}>
              <Form onSubmit={handleSubmit(onSubmit)} >
            <h6>Add Review here:</h6>
            <input className="form-control" id="name" placeholder="Name" {...register("name")} />
            <br />
            <input className="form-control" id="company" placeholder="Company's name,Designation" {...register("company")} />
            <br />
            <input className="form-control" id="description" placeholder="Description" {...register("description")} />
            <br />
            

            <input className="btn btn-primary" value="Submit" type="submit" />
            <br/><br/>
            {isSubmited && <p style={{color: 'green'}}>Review uploaded successfully</p>}
          
        </Form>
        </div>
        </div>
        </section>
    );
};

export default Review;