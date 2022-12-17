import Login from "../pages/Login/Login";
import Chat from "../pages/Chat/Chat"
import { Navigate } from "react-router-dom";


export const publicRoutes = [
	{path: "/login", element: <Login/>},
	{path: "/*", element: <Navigate to="/login" replace />},
	
]

export const privateRoutes = [
	{path: "/chat", element: <Chat/>},
	{path: "/*", element: <Navigate to="/chat" replace />},
]