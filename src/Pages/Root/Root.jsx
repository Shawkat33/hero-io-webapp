import React from "react";
import Home from "../Home/Home";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";

const Root = () => {
	return (
		<div className="min-h-screen flex flex-col inter">
			<Navbar></Navbar>
			<main className="flex-1 bg-[#F5F5F5]">
				<Outlet></Outlet>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default Root;
