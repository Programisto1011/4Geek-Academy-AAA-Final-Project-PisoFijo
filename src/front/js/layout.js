import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Register from "./pages/register.js";
import { Login } from "./pages/login";
import Filter from "./pages/filter";
import Details from "./pages/details";
import ContactUs from "./pages/contactUs";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

import bg from "../img/bg.png"
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{backgroundImage: `url(${bg}`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat' }}>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/filter">
							<Filter />
						</Route>
						<Route exact path="/details">
							<Details/>
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/contactus">
							<ContactUs />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
