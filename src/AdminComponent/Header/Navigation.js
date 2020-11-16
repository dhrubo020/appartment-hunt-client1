import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {


    return (
        <div>
            <div className="bg-white" id="navbarSupportedContent">
                <ul className="navbar-nav">

                    <li className="nav-item pl-3">
                        <Link className="nav-link" to="/admin">
                            Booking List
                        </Link>
                    </li>
                    <li className="nav-item pl-3">
                        <Link className="nav-link" to="/admin/addRentHouse">
                            Add Rent House
                        </Link>
                    </li>
                    <li className="nav-item pl-3">
                        <Link className="nav-link" to="/admin/myRent">
                            My Rent
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;