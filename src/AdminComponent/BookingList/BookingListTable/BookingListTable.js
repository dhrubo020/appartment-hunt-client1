import React from 'react';

const BookingListTable = ({ key, bookingData }) => {
    const { name, email, phone, message, status } = bookingData;
    console.log(bookingData);


    return (
        <tr>
            <th scope="row">{key}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{message}</td>
            <td>
                <select className="custom-select mr-5" id="inputGroupSelect01" >
                    {
                        status === 'Pending'
                        &&
                        <>
                            <option value="Pending" defaultValue style={{ color: '#FF4545' }}>
                                Pending
                                                    </option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Done">Done</option>
                        </>
                    }
                    {
                        status === 'Ongoing'
                        &&
                        <>
                            <option value="Ongoing" defaultValue style={{ color: '#FFBD3E' }}>
                                Ongoing
                                                    </option>
                            <option value="Ongoing">Done</option>
                            <option value="Done">Pending</option>
                        </>
                    }
                    {
                        status === 'Done'
                        &&
                        <>
                            <option value="Done" defaultValue style={{ color: '#009444' }}>
                                Done
                                                    </option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Done">Pending</option>
                        </>
                    }
                </select>
            </td>
        </tr>
    );
};

export default BookingListTable;