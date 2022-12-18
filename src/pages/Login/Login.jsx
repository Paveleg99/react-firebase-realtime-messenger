import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Login = () => {
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
						<Button variant="contained" color="success">Войти c помощью Google</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Login;