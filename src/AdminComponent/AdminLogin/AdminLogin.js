import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const AdminLogin = () => {

    const history = useHistory();
    const [submit, setSubmit] = useState(false)
    const handleSubmit = () => {
        setSubmit(!submit)
        history.push('/admin')
    }
    return (
        <div >
            <div className="text-center mt-5 " >
                <h4>Admin Login</h4>
                <div className="p-3" >
                    <form onSubmit={handleSubmit}>
                        <p>Username</p>
                        <div className="m-2">
                            <input type="text" name="username" defaultValue="admin" className="form-control-lg" />
                        </div >
                        <p>Password</p>
                        <div className="m-2">
                            <input type="password" name="password" defaultValue="admin" className="form-control-lg" />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary"> Login </button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default AdminLogin;