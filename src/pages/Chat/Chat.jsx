import { async } from '@firebase/util';
import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';

const Chat = () => {
	const { auth, db } = useContext(Context);
	const [user] = useAuthState(auth);
	const [value, setValue] = useState('');
	

	const sendMessage = async () => {
		console.log(value)
	}

	return (
		<Container>
			<Grid container
				style={{ height: window.innerHeight - 86, marginTop: 20 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<div style={{ width: '80%', height: '70vh', border: '1px solid green', overflowY: 'auto' }}>

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
						onChange={e=> setValue(e.target.value)}
					/>
					<Button	onClick={sendMessage} variant='outlined' color='success'> Отправить </Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Chat;