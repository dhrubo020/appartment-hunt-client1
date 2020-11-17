import React, { useState } from 'react';
import Axios from 'axios';

const AddRentHouse = () => {

    const [serviceInfo, setServiceInfo] = useState({
        title: '',
        location: '',
        noOfBathroom: '',
        noOfBedRoom: '',
        price: '',
        imageUrl: ''
    })

    const handleOnBlur = (e) => { //----------------------- handleOnBlur
        const eName = e.target.name;
        const eValue = e.target.value;
        const newObject = { ...serviceInfo }

        if (eName === 'title') {
            newObject.title = eValue;
        } else if (eName === 'location') {
            newObject.location = eValue;
        } else if (eName === 'noOfBathroom') {
            newObject.noOfBathroom = eValue;
        } else if (eName === 'noOfBedRoom') {
            newObject.noOfBedRoom = eValue;
        } else if (eName === 'price') {
            newObject.price = eValue;
        }
        setServiceInfo(newObject);
    }

    const handleFormSubmit = (e) => { //-------------------------- handleFormSubmit
        console.log(serviceInfo)
        fetch('https://murmuring-dawn-07666.herokuapp.com/addRent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert("Item added successfully!")
                    setServiceInfo({ title: '', location: '', noOfBathroom: '', noOfBedRoom: '', price: '', imageUrl: '' })
                } else {
                    window.alert("This item already added!")
                }

            })
        e.preventDefault();
    }

    const uploadImage = (img) => {
        let body = new FormData()
        body.set('key', '487bbc78512fb205a6c29d2bb714749b')
        body.append('image', img)

        return Axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }
    const upload = (e) => {
        uploadImage(e.target.files[0])
            .then(resp => {
                // console.log(resp.data.data.thumb.url) // I'm aware it's data.data, that is how it returns stuff
                const newObject = { ...serviceInfo }
                newObject.imageUrl = resp.data.data.thumb.url;
                setServiceInfo(newObject);
            })
        e.preventDefault();
    }



    return (
        <div>
            <div className="p-4 my-3" style={{ backgroundColor: '#f4f7fc' }}>
                <p className="h4  mt-4">Add New service</p>
                <div className="">
                    <form onSubmit={handleFormSubmit}>
                        <div className="container fluid">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <label>Title</label>
                                    <input onBlur={handleOnBlur} name="title" type="text" className="form-control" required />
                                    <br />
                                    <label>Location</label>
                                    <input onBlur={handleOnBlur} name="location" type="text" className="form-control" required />
                                    <br />
                                    <label>No of Bedroom</label>
                                    <input onBlur={handleOnBlur} name="noOfBedRoom" type="number" className="form-control" required />
                                    <br />


                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <label>No of Bathroom</label>
                                    <input onBlur={handleOnBlur} name="noOfBathroom" type="number" className="form-control" required />
                                    <br />
                                    <label>Price</label>
                                    <input onBlur={handleOnBlur} name="price" type="number" className="form-control" required />
                                    <br />
                                    <div className=" " >
                                        <label >Thumbnail</label>
                                        <br/>
                                        <input onChange={upload} type="file" name="myFile" />
                                        <br /> <br/>
                                        {
                                            serviceInfo.imageUrl ? <img src={serviceInfo.imageUrl} height="60" alt="" /> : <small className="text-mute">Image will be appeared here</small>
                                        }
                                        <br />
                                    </div>
                                    <br />
                                    <div className="ml-5">
                                        <button type="submit" className="brand-green-btn">Submit</button>
                                    </div>
                                    <br /><br />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


                {/* available service list */}


            </div>
        </div>
    );
};

export default AddRentHouse;