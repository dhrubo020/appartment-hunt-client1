import React from 'react';
import './Footer.css'
import instagram from '../../logos/Vector-1.png';
import LinkedIn from '../../logos/Vector-2.png';
import Youtube from '../../logos/Vector-3.png';
import facebook from '../../logos/Vector.png';
import logo1 from '../../logos/map-marker-alt-solid 1.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col col1-style d-flex">
                    <img src={logo1} width="27px" height="30px" alt="" />
                        <p className="h4-style ml-3">H#340 (4th Floor), Road #24, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh <br /> Phone: 018XXXXXXXX <br /> E-mail: info@company.com</p>
                    </div>
                    <div className="col col2-style">
                        <h5 style={{color: "white", fontWeight: 'bold'}} className="mr-3">Company</h5>
                        <ul className="ml-5">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Submit Listing  </a></li>
                        </ul>
                    </div>
                    <div className="col col2-style">
                       <h5 style={{color: "white", marginRight: "65px", fontWeight: 'bold'}}>Quick Links</h5>
                        <ul className="ml-3" style={{marginLeft: '25px'}}>
                            <li><a href="#">Quick</a></li>
                            <li><a href="#">Links</a></li>
                            <li><a href="#">Rentals</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Our blog</a></li>
                        </ul>
                    </div>
                    <div className="col col2-style">
                    <h5 style={{color: "white", marginRight: "190px", fontWeight: 'bold'}}>About us</h5>
                    <p className="h4-style mt-3">We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                    <div className="mt-5 icons-style">
                    <img src={facebook} width="30px" alt="" />
                    <img src={instagram} width="30px" className="ml-3" style={{marginLeft:"10px"}} alt="" />
                    <img src={LinkedIn} width="30px" className="ml-3" style={{marginLeft:"10px"}} alt="" />
                    <img src={Youtube} width="30px" className="ml-3" style={{marginLeft:"10px"}} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;