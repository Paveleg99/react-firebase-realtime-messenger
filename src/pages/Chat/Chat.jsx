import { async } from '@firebase/util';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import Loader from '../../components/UI/Loader/Loader';
import classes from './Chat.module.css'

const Chat = () => {
	const { auth, db } = useContext(Context);
	const [user] = useAuthState(auth);
	const [value, setValue] = useState('');
	const [messages, setMessages] = useState([]);

	//  const [messages, loading] = useCollectionData(
	//  	query(collection(db, 'messages'), orderBy('CreatedAt', "asc"))
	//  )

	const sendMessage = async () => {
		try {
			const docRef = await addDoc(collection(db, 'messages'), {
				uid: user.uid,
				displayName: user.displayName,
				photoURL: user.photoURL,
				text: value,
				createdAt: Timestamp.fromDate(new Date()),
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		setValue('');
	}

	const getMessages = async () => {
		const q = query(collection(db, 'messages'), orderBy('createdAt', "asc"));
		const querySnapshot = await getDocs(q);
		// const querySnapshot = await getDocs(collection(db, 'messages'));
		setMessages([]);
		console.log(querySnapshot);
		querySnapshot.docs.map((doc) => {
			setMessages((messages) =>
				[...messages, doc.data()]
			)
		});

	}

	useEffect(() => {
		getMessages();
		console.log(messages);
	}, [value]);


	// if (loading) {
	// 	return <Loader />
	// }

	return (
		<Container>
			<Grid container
				style={{ height: window.innerHeight - 86, marginTop: 20 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<div style={{ width: '80%', height: '70vh', border: '1px solid green', overflowY: 'auto' }}>
					{
						messages.map((message) =>
							<div className={classes.message} style={{
								border: user.uid === message.uid ? '2px solid green' : ' 2px solid red',

							}}>
								<div className={classes.message_avatar}>
									<Avatar src={message.photoURL} />
								</div>
								<Grid className={classes.message_content} container>
									<div style={{ marginBottom: 5 }}>{message.displayName}</div>
									<div>{message.text}</div>
								</Grid>

							</div>
						)
					}
				</div>
				<Grid container
					direction={'column'}
					alignItems={'flex-end'}
					style={{ width: '80%' }}
				>
					<TextField
						variant='outlined'
						fullWidth
						maxRows={2}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<Button onClick={sendMessage} variant='outlined' color='success'> Отправить </Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Chat;