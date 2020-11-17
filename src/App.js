import logo from './logo.svg';
import './App.css';
import Layout from './AdminComponent/Layout/Layout';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import DetailsPage from './HomePageComponent/DetailsPage/DetailsPage';
import Home from './HomePageComponent/Home/Home';

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Switch>

					<Route path='/admin'><Layout /> </Route>

					<Route exact path='/'> <Home/> </Route>
					<Route path='/home'> <Home/> </Route>

					<Route path="/details/:detailsId"> <DetailsPage/> </Route>

					<Route path='*'> <h4> 404 error </h4> </Route>

				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
