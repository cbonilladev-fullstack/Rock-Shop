import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import logo from '../../assets/stone.png';
import useStyles from './styles';


const Navbar = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography variant="h6" className={classes.image} color="inherit">
						<img src={logo} alt="Rock Shop" height="25px" className={classes.image}/>
						Rock Shop
					</Typography>
					<div className={classes.grow}/>
					<div className={classes.button}>
						<IconButton aria-lavel="Show cart items" color="inherit">
							<Badge badgeContent={2} color="secondary">
								<ShoppingCart />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
