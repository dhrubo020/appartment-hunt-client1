import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../../logos/Logo.png"
import './Navbar.css'
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md pt-2 mt-3 container-md">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="60" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: 'pink' }}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className="nav-link ml-3" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/">Concerns</Link>
                        </li>
                        <li className="nav-item mr-3 ml-3">
                            <Link className="nav-link" to="/">Event</Link>
                        </li>
                        <li className="nav-item mr-3 ml-3">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        {
                            loggedInUser.name
                                ?
                                <li className="nav-item mr-3 ml-3">
                                    <span className="nav-link">{loggedInUser.name}</span>
                                </li>
                                :
                                <>
                                    <Link to="/login">
                                        <button style={{ padding: "5px 30px" }} type="button" class="btn login-btn mr-2">Login </button>
                                    </Link>
                                    <Link to="/adminLogin">
                                        <button style={{ padding: "5px 30px" }} type="button" class="btn login-btn mr-2">Admin </button>
                                    </Link>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;