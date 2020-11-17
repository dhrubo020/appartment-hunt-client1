import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {
    const { serviceImage, serviceName, serviceDetail } = service;

    return (
        <div className="col-md-4 text-center mb-5 mt-3">
                <div className="service-card align-items-center">
                    <img style={{ height: '75px' }} src={serviceImage} alt=""/>
                    <h5 className="mt-3 mb-3" style={{ color: 'black' }}>{serviceName}</h5>
                    <p className="text-secondary">{serviceDetail}</p>
                </div>
            </div>
    );
};

export default ServiceDetail;