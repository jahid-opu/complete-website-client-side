import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useState } from 'react';


const BookingListTable = ({ booking }) => {
    const [status, setStatus] = useState(booking.status);
    const handleChange = (e, id) => {
        console.log(id, e);
        fetch(`https://limitless-stream-90752.herokuapp.com/statusUpdate/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ e })
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    setStatus(e);
                }
            })
    }
    return (
        <tr>
            <td>{booking.userName}</td>
            <td>{booking.email}</td>
            <td>{booking.name}</td>
            <td>{status}</td>
            <td>
                <Form.Control onChange={(e) => handleChange(e.target.value, booking._id)} as="select">
                    <option selected disabled>Choose an option</option>
                    <option>Pending</option>
                    <option>On going</option>
                    <option>Done</option>
                </Form.Control>
            </td>
        </tr>

    );
};

export default BookingListTable;