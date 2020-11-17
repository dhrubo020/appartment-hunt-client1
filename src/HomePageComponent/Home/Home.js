import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import RentApartment from '../RentApartment/RentApartment';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <RentApartment/>
            <Service/>
            <Footer/>
        </div>
    );
};

export default Home;