import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookingList from '../BookingList/BookingList';
const Dashboard = () => {
    return (
        <section className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <BookingList></BookingList>
            </div>
        </section>
    );
};

export default Dashboard;