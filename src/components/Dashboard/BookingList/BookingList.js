import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
import BookingListTable from '../BookingListTable/BookingListTable';
import { Table } from 'react-bootstrap';
import './BookingList.css';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://limitless-stream-90752.herokuapp.com/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    useEffect(() => {
        fetch('https://limitless-stream-90752.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="row book-table">
            {isAdmin &&


                <Table striped bordered hover variant="primary">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>

                        {bookings.map((booking) => <BookingListTable booking={booking}></BookingListTable>)}

                    </thead>
                </Table>
            }



            {!isAdmin &&
                bookings.map((booking) => <BookingListCard booking={booking}></BookingListCard>)

            }


        </div>
    );
};

export default BookingList;