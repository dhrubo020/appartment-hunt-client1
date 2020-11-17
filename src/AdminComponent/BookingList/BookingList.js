import React, { useEffect, useState } from 'react';
import BookingListTable from './BookingListTable/BookingListTable';

const BookingList = () => {

    const [bookingList, setBookingList] = useState([])

    useEffect(() => {
        fetch(`https://murmuring-dawn-07666.herokuapp.com/allBookings`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookingList(data)
            })
    }, [])

    const updateStatus=(e,id)=>{
        console.log(id);
        const newStatus = e.target.value
        const sendData = { id, newStatus }

        console.log(sendData);

        fetch(`https://murmuring-dawn-07666.herokuapp.com/updateStatus`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    window.alert("Status update successfully")
                } else {
                    window.alert("Error in update")
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }


    return (
        <div >
            <div class="hide-scroll-area mt-3" >
                <table class="table">
                    <thead className="fixed">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Message</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingList.map((each, index) => <BookingListTable key={index} updateStatus={updateStatus} bookingData={each} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BookingList;