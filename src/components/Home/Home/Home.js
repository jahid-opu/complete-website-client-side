import React from 'react';
import './Home.css';
import Navbars from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import About from '../About/About';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navbars></Navbars>
            <HeaderMain></HeaderMain>
            <About></About>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;