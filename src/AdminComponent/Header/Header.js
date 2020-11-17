import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Logo.png'

const Header = ({ title }) => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '10px 40px' }}>
                <Link className="navbar-brand" href="#">
                    <img src={logo} height="60" alt="" />
                </Link>
                <div className="d-inline-block ml-5 pl-5">
                    <h3>{title}</h3>
                </div>

                <div className="ml-auto">
                    <Link to='/'>Home</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;