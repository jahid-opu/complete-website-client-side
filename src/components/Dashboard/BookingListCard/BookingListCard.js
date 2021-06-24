import React from 'react';

const BookingListCard = ({booking}) => {
    return (
        <div className="col-md-4">
            <div className="service-card">
                <div className="d-flex justify-content-between">
                <img style={{ width: "50px" }} src={booking.imageURL} alt="" />
                {booking.status}
                </div>
                <h3>{booking.name}</h3>
                <p>{booking.description}</p>
                <p>${booking.price}</p>
            </div>
        </div>
    );
};

export default BookingListCard;