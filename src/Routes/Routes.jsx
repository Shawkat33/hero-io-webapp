import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import Installed from "../Pages/Installed/Installed";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/apps", element: <Apps /> },
			{ path: "/installed", element: <Installed /> },
			{ path: "*", element: <ErrorPage /> },
		],
	},
]);
