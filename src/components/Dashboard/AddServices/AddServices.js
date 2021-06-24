import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageUrl] = useState(null);
    const [isSubmited,setIsSubmited] = useState(false);
    const onSubmit = (data) =>{

        const serviceData = {
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        }
        console.log(serviceData);

        const url = `https://limitless-stream-90752.herokuapp.com/addservice`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(response => response.json())
        .then(data =>setIsSubmited(data))

        document.getElementById("name").value= '';
        document.getElementById("description").value= '';
        document.getElementById("price").value= '';
        document.getElementById("img").value= '';

    }

    // Handle Image Upload 
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a4eb966ac76c6b59719e1a529adae7d6');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }
    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

        <div className="col-md-10 p-5">
            <div style={{width:'50%'}} className="m-auto">
        <Form onSubmit={handleSubmit(onSubmit)} >
            <h6>Add Services:</h6>
            <input className="form-control" id="name" placeholder="Name" {...register("name")} />
            <br />
            <input className="form-control" id="description" placeholder="Description" {...register("description")} />
            <br />
            <input className="form-control" id="price" placeholder="Price" {...register("price")} />
            <br />
            <input className="form-control" id="img" type="file" onChange={handleImageUpload} />
            <br />

            <input className="btn btn-primary" value="Add Service" type="submit" />
            <br/><br/>
            {isSubmited && <p style={{color: 'green'}}>Service uploaded successfully</p>}
        </Form>
        </div>
    </div>
    </section>
    );
};

export default AddServices;