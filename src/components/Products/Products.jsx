import { Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product/Product';
import useStyles from './styles';

const products =  [
	{ id: 1, name: 'Gray Rock', description: "You won't find a better gray rock.", price: '$5', image: 'https://images-na.ssl-images-amazon.com/images/I/61k-SyHsxEL._AC_SL1000_.jpg'},
	{ id: 2, name: 'Black Rock', description: "Higher quality black rocks than the competition.", price: '$3', image: 'https://www.thoughtco.com/thmb/3jzlU6l0lTqWOn1wl5zw1eDDigQ=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/augite-59036caa5f9b5810dc01f3be.jpg'},
]

const Products = () => {
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar}/>
			<Grid container justify="center" spacing={4}>
				{products.map((product) => {
					return (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product}/>
					</Grid>
					)
				})}
			</Grid>
		</main>
	)
}

export default Products;