import { Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product/Product';

const products =  [
	{ id: 1, name: 'Gray Rock', description: "You won't find a better gray rock.", price: '$5'},
	{ id: 2, name: 'Black Rock', description: "Higher quality black rocks than the competition.", price: '$3'},
]

const Products = () => {
	return (
		<main>
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