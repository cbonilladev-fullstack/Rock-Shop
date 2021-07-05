import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Products from './components/Products/Products'
import { Navbar, Products } from './components'
import { commerce } from './lib/commerce'

const App = () => {
	const [products, setProducts] = useState([])

	const fetchProducts = async () => {
		const { data } = await commerce.products.list()
	
		setProducts(data);
	}

	useEffect(() => {
		fetchProducts();
	}, [])

	return (
		<div>
			<Navbar />
			<Products products={products}/>
		</div>
	)
}

export default App
