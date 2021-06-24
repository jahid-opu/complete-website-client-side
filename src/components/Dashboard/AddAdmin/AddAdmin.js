import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmited,setIsSubmited] = useState(false);

    const onSubmit = (email) => {
        console.log(email);
        const url = `https://limitless-stream-90752.herokuapp.com/addadmin`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        })
        .then(response => response.json())
        .then(data =>setIsSubmited(data))
    }
    return (
        <section className="row">
            <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
            <div className="col-md-6 p-5">
            <Form onSubmit={handleSubmit(onSubmit)} >
            <h6>Add Admin here:</h6>
            <input className="form-control" id="email" placeholder="Email" {...register("email")} />
            <br />

            <input className="btn btn-primary" value="Make Admin" type="submit" />
            <br/><br/>
            {isSubmited && <p style={{color: 'green'}}>Admin Created successfully</p>}
        </Form>
            </div>
        </section>
    );
};

export default AddAdmin;