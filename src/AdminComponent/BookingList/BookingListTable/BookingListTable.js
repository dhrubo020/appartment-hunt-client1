import React from 'react';

const BookingListTable = ({ key, bookingData, updateStatus }) => {
    const { fullname, email, phone, message, status, _id } = bookingData;

    return (
        <tr>
            <td>{key}</td>
            <td>{fullname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{message}</td>
            <td>
                <select onChange={(e) => updateStatus(e, _id)} className="custom-select mr-5" id="inputGroupSelect01" >
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