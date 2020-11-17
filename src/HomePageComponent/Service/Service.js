import React, { useState } from 'react';
import serviceInfo from '../../fakedata/serviceInfo';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css'

const Service = () => {
    const [service, setService] = useState(serviceInfo);

    return (
        <div className="background">
            <h5 className="h5">Service</h5>
            <div className="h2-style">
                <h2>We're an agency tailored to all <br/> clients' needs that always delivers</h2>
            </div>
            <div className="d-flex  justify-content-center ">
                <div className="container-md  row mt-3 mb-5 ml-3 pt-3">
                    {
                        service.map(service => <ServiceDetail
                            service={service}
                            key={service.key}
                        ></ServiceDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;