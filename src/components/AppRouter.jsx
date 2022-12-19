import React, { useContext } from 'react';
import {Route, Routes } from 'react-router-dom';
import { Context } from '..';
import { privateRoutes, publicRoutes } from '../routes';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
	const {auth} = useContext(Context);
	const [user] = useAuthState(auth);
	console.log(user);
	return (
		user
		?
		<Routes>
		{privateRoutes.map(route =>
			<Route
				path={route.path}
				element={route.element}
				key={route.path}
			/>
		)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route =>
				<Route
					path={route.path}
					element={route.element}
					key={route.path}
				/>
			)}
		</Routes>	
	)
}

export default AppRouter;
