import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Context } from '../..';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { async } from '@firebase/util';

const Login = () => {
	const { auth } = useContext(Context);

	const login = async () => {
		const provider = new GoogleAuthProvider()
		const { user } = await signInWithPopup(auth, provider)
		console.log(user);
	}
	return (
		<Container>
			<Grid container
				style={{ height: window.innerHeight - 66 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid style={{ width: 400, background: 'lightgray', borderRadius: 5, }}
					container
					alignItems={"center"}
					direction={"column"}
				>
					<Box p={5}>
						<Button onClick={login} variant="contained" color="success">Войти c помощью Google</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Login;