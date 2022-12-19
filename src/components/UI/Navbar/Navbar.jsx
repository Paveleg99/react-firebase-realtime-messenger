import React, { useContext } from 'react';
import classes from './Navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../..';
import { signOut } from 'firebase/auth';


const Navbar = () => {
	const {auth} = useContext(Context);
	const [user] = useAuthState(auth);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color='success' position="static">
				<Toolbar > 
					<Grid container justifyContent="flex-end">
						{user
							? <Button onClick={() => signOut(auth)} className={classes.loginBtn} variant="outlined" color='success'>Выйти</Button>
							: <NavLink to='/login'>
								<Button className={classes.loginBtn} variant="outlined" color='success'>Логин</Button>
							</NavLink>
						}
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar;