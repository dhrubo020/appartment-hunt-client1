import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AddRentHouse from '../AddRentHouse/AddRentHouse';
import BookingList from '../BookingList/BookingList';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation';
import MyRent from '../MyRent/MyRent';

const Layout = () => {
    let currentLocation = useLocation()
    console.log(currentLocation.pathname)
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 bg-white ">
                        <div className="p-3">
                            <Navigation />
                        </div>
                    </div>
                    <div className="col-md-10">
                        {
                            currentLocation.pathname === '/admin'
                            &&
                            <BookingList/>
                        }
                        {
                            currentLocation.pathname === '/admin/addRentHouse'
                            &&
                            <AddRentHouse/>
                        }
                        {
                            currentLocation.pathname === '/admin/myRent'
                            &&
                            <MyRent/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;