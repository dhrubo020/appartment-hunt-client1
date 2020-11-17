import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Info.css'

const Info = () => {
    const { detailsId, detailTitle, detailPrice } = useParams();

    // const [rentDetail, setRentDetail] = useState([]);
    // useEffect( () => {
    //     fetch('https://murmuring-dawn-07666.herokuapp.com/allApartments')
    //         .then(res => res.json())
    //         .then(data => setRentDetail(data))
    // }, [] )

    // const rentPlaces = rentDetail.find(rentPlace => rentPlace._id === detailsId)
    // console.log(rentPlaces.title);

    return (
        <div style={{ width: "700px", marginLeft: "127px" }}>
            <div>
                <div className="d-flex">
                    {/* <h2 style={{color: 'black'}}>{rentPlaces.title}</h2> */}
                    {/* <img src={rentPlaces.imageUrl} alt=""/> */}
                    <h2 className="title">{detailTitle}</h2>
                    <span className="span">${detailPrice}</span>
                </div>
                <p className="paragraph">
                    3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.
                    </p>
            </div>
            <div style={{marginTop:"70px"}}>
                <h2 className="head">Price details</h2>
                <p className="paragraph">Rent/Month: $550 (negotiable)
                Service Charge : 8,000/= Tk per month, subject to change
                Security Deposit : 3 month’s rent
                    Flat Release Policy : 3 months earlier notice required</p>
            </div>
            <div style={{marginTop:"40px"}}>
                <h2 className="head">Property details</h2>
                <p className="paragraph">Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                Flat Size : 3000 Sq Feet.
                Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                    Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
            </div>
        </div>
    );
};

export default Info;