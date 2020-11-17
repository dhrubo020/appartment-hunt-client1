import React from 'react';
import { useForm } from 'react-hook-form';

const DetailsPage = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
     
        fetch('https://murmuring-dawn-07666.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Your order has been made successfully!')
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="form-input"
                                ref={register({ required: true })}
                            />
                             {errors.fullname && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone No."
                                className="form-input"
                                style={{color: 'black'}}
                                ref={register({ required: true })}
                            /> 
                            {errors.phone && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                style={{color: 'black'}}
                                className="form-input"
                                ref={register({ required: true })}
                            /> 
                            {errors.email && <span className="text-danger ml-3">This field is required</span>}<br />
                            <textarea
                                rows="3"
                                cols="50"
                                maxlength="100"
                                name="message"
                                placeholder="message"
                                className="text-area"
                                style={{color: 'black'}}
                                ref={register({ required: true })}
                            ></textarea>
                            {errors.message && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                style={{ backgroundColor: '#111430' }}
                                class="btn pr-5 pl-5 text-white"
                                type="submit"
                                placeholder="Request Booking"
                            />
                        </form>
        </div>
    );
};

export default DetailsPage;