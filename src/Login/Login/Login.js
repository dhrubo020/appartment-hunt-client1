import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Card, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../firebase.config';
import { UserContext } from '../../App';
import './Login.css'


const Login = () => {

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    confirmPassword: false,
  })

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  //google log in btn
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser)
      history.replace(from);

    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      alert('Please try again')
    });
  }

  const handleGoogleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: '',
          error: '',
          success: false
        }
        setUser(signedOutUser)
      })
      .catch(error => {
        const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
      })
  }

  //fb log in btn
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleFbSignIn = () => {

    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      setLoggedInUser(user)
      history.replace(from);
    }).catch(error => {
      const newUserInfo = { ...user }
      newUserInfo.error = error.message;
      newUserInfo.success = false
      setUser(newUserInfo)
    });

  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFieldValid = isPasswordValid && passwordHasNumber
    }


    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }

  }

  //check confirm password
  const confirmPasswordCheck = (e) => { 
    if (e.target.value === user.password) {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = true;
        setUser(newUserInfo);
        console.log('true');
    } else {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = false;
        console.log('false');
    }
}


  //form submit
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password && user.confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          updateProfile(user.name)
          setLoggedInUser(newUserInfo)
          history.replace(from);
        })
        .catch(error => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }

    //profile name update
    const updateProfile = name => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name
      }).then(function () {
        console.log("user name updated successfully");
      }).catch(function (error) {
        console.log(error);
      });
    }

    //new user
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          history.replace(from);
        })
        .catch(error => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }
    e.preventDefault();
  }


  return (
    <div>

    {/* log in and register form  */}
    <Card style={{ width: '25rem', margin: '0 auto', marginTop: '100px' }}>
      <Card.Body>
        {newUser ? <h3>Create an account</h3> : <h3>Login</h3>}

        <Form onSubmit={handleSubmit}>
          {newUser && <Form.Group controlId="formBasicText">
            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="First Name" required/>
          </Form.Group>}
          {newUser && <Form.Group controlId="formBasicText">
            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Last Name" required/>
          </Form.Group>}


          <Form.Group controlId="formBasicEmail">
            <Form.Control onBlur={handleBlur} type="text" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required />
          </Form.Group>

          {newUser && <Form.Group controlId="formBasicText">
            <Form.Control onChange={confirmPasswordCheck} type="password" name="confirmPassword" placeholder="Confirm Password" required/>
          </Form.Group>}
          {!newUser && <Form.Group controlId="formBasicCheckbox" className="d-flex ">
            <Form.Check type="checkbox" label="Remember Me" /> <p className="forgetPassword">Forget Password</p>
          </Form.Group>}
          
          <input className="BtnDesign" type="submit" value={newUser ? 'Create an account' : 'Login'} />

          {newUser ? <p>Already have an account?<span className="commonColor" onClick={() => setNewUser(!newUser)}>Login</span></p> :
            <p>Don't have account?<span className="commonColor" onClick={() => setNewUser(!newUser)}>Create a account</span></p>}
        </Form>
      </Card.Body>
    </Card>

    {/* fb */}
    <button className="facebook-button" onClick={handleFbSignIn}>Continue with Facebook</button>

    {/* google */}
    {
      user.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign out</button> :
        <button className="google-button" onClick={handleGoogleSignIn}>Continue with Google</button>
    }
    {
      user.isSignedIn && <div>
        <p>Welcome, {user.name}</p>
        <p>Your email: {user.email}</p>
        <img src={user.photo} alt="" />
      </div>
    }

    <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
    {user.success && <p style={{ color: 'green', textAlign: 'center' }}>USER {newUser ? 'CREATED' : 'LOGGED IN'} SUCCESSFULLY</p>}
  </div>
  );
};

export default Login;