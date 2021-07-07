import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/stone.png';
import useStyles from './styles';



const Navbar = ({totalItems}) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography component={Link} to="/" variant="h6" className={classes.image} color="inherit">
						<img src={logo} alt="Rock Shop" height="25px" className={classes.image}/>
						Rock Shop
					</Typography>
					<div className={classes.grow}/>
					{location.pathname === '/' && (
					<div className={classes.button}>
						<IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
							<Badge badgeContent={totalItems} color="secondary">
								<ShoppingCart />
							</Badge>
						</IconButton>
					</div> )}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
