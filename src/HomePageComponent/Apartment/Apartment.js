import React from 'react';
import image1 from '../../logos/map-marker-alt-solid 1.png'
import image2 from '../../logos/bed 1.png'
import image3 from '../../logos/bath 1.png';
import './Apartment.css'
import { Link } from 'react-router-dom';

const Apartment = ({ details }) => {
    const { title, imageUrl, price } = details;

    return (
        <div>
            
                <div className=" card box mt-3 ml-5">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={imageUrl} class="card-img-top" alt="..." />
                        <div class="card-body" >
    <h5 style={{ color: 'black' }} class="card-title">{title}</h5>
                            <div>
                                <img src={image1} width="10px" alt="" />
                                <span style={{ marginLeft: "5px" }} className="fontSize">Nasirabad H/S, Chattogram</span>
                            </div>
                            <div>
                                <img src={image2} width="20px" alt="" />
                                <span style={{ marginLeft: "5px" }} className="fontSize"> 3 bedrooms</span>
                                <img src={image3} className="left" width="20px" alt="" />
                                <span style={{ marginLeft: "5px" }} className="fontSize"> 2 bathroom</span>
                            </div>
                            <div className="price-area">
                                <span className="price">${price}</span>
                                <Link to={`/details/${details._id}`}><button className="detail-btn">view details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Apartment;