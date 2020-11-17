import React from 'react';
import image1 from '../../logos/map-marker-alt-solid 1.png'
import image2 from '../../logos/bed 1.png'
import image3 from '../../logos/bath 1.png';
import './Apartment.css'
import { Link } from 'react-router-dom';

const Apartment = ({ details }) => {
    const { title, imageUrl, price, location } = details;

    return (
        <div>
            <div className=" card box mt-3 ml-5">
                <div class="card" style={{ width: "19rem" }}>
                    <img src={imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body" >
                        <p className="card-title">{title}</p>
                        <div>
                            <img src={image1} width="10px" alt="" />
                            <span style={{ marginLeft: "5px" }} className="fontSize">{location}</span>
                        </div>
                        <div>
                            <img src={image2} width="20px" alt="" />
                            <span style={{ marginLeft: "5px" }} className="fontSize"> 3 bedrooms</span>
                            <img src={image3} className="left" width="20px" alt="" />
                            <span style={{ marginLeft: "5px" }} className="fontSize"> 2 bathroom</span>
                        </div>
                        <div className="price-area">
                            <span className="price">${price}</span>
                            <Link to={`/details/${details._id}/${details.title}/${details.price}`}><button className="detail-btn">view details</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Apartment;