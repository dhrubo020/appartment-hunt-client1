import React from 'react';
import { Link } from 'react-router-dom';

const MyRentTable = ({ viewDetailsAction, houseData }) => {
    const { title, price, _id } = houseData;
    return (

        <tr className=" ">
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <Link to={`/details/${_id}/${title}/${price}`}>
                    <button className="btn btn-primary" >View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default MyRentTable;