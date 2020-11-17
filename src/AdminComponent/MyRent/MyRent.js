import React, { useEffect, useState } from 'react';
import MyRentTable from './MyRentTable/MyRentTable';

const MyRent = () => {

    const [rentList, setRentList] = useState([])

    useEffect(()=>{
        fetch(`https://murmuring-dawn-07666.herokuapp.com/allApartments`)
        .then(res=>res.json())
        .then(data=>{
            setRentList(data);
        })
    },[])

    const viewDetailsAction =(id)=>{
        console.log(id);
    }
    return (
        <div>
            <div class="hide-scroll-area mt-3" >
                <table class="table">
                    <thead className="fixed">
                        <tr>
                            <th >House Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rentList.map((each, index) => <MyRentTable key={index + 1} viewDetailsAction={viewDetailsAction} houseData={each} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRent;