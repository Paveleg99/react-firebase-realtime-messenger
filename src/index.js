import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
	apiKey: "AIzaSyA0H6zYiVqff3tAONv1tJb0mRrsQuGJVMc",
	authDomain: "react-realtime-chat-21f99.firebaseapp.com",
	projectId: "react-realtime-chat-21f99",
	storageBucket: "react-realtime-chat-21f99.appspot.com",
	messagingSenderId: "131301020514",
	appId: "1:131301020514:web:10bab63f95dbb40711d23b",
	measurementId: "G-9ZKXJ8SV1M"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		auth,
		db,
	}}>
    <App />
	</Context.Provider>
);
