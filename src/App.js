import logo from './logo.svg';
import './App.css';
import Layout from './AdminComponent/Layout/Layout';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Switch>

					<Route path='/admin'><Layout /> </Route>

					<Route path='*'> <h4> 404 error </h4> </Route>

				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
