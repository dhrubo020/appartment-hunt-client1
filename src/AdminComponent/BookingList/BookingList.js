import React from 'react';
import BookingListTable from './BookingListTable/BookingListTable';

const BookingList = () => {

    const fakeData = [
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Ongoing' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Ongoing' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Ongoing' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Ongoing' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Pending' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Done' },
        { name: 'aa', email: 'aaa', phone: '123', message: 'sdas', status: 'Ongoing' }
    ]
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
                            fakeData.map((each, index) => <BookingListTable key={index + 1} bookingData={each} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BookingList;