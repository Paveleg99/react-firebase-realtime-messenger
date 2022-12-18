import React from 'react';
import classes from './Navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
	const isAuth = false;
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color='success' position="static">
				<Toolbar>
					<Grid container justifyContent="flex-end">
						{isAuth
							? <Button className={classes.loginBtn} variant="outlined" color='success'>Выйти</Button>
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