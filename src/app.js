import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header.js';
import { Body, About, Contact, Error, ResturantMenu } from './components';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => (
	<div className="app">
		<Header />
		<Outlet />
	</div>
);

const appRouter = createBrowserRouter([
	{
		path: '/', element: <AppLayout />,
		children: [
			{ path: '/', element: <Body /> },
			{ path: '/home', element: <Body /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/resturant/:resId', element:<ResturantMenu/> } 
		],
		errorElement: <Error />
	},
	
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
