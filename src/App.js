import logo from './logo.svg';
import './App.css';
import Layout from './AdminComponent/Layout/Layout';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';
import Login from './Login/Login/Login';

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({})
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<BrowserRouter>
				<Switch>

					<Route path='/admin'><Layout /> </Route>

					<Route path='/login'><Login /> </Route>

					<Route path='*'> <h4> 404 error </h4> </Route>

				</Switch>
			</BrowserRouter>
		 </UserContext.Provider>
	);
}

export default App;
