import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../Product/Product'
import st from './ProductList.module.scss'

function ProductList({ addToCart, searchValue }) {
	const [products, setProducts] = useState([])

	async function fetchProducts() {
		try {
			const response = await axios.get(
				'https://dummyjson.com/products/category/groceries'
			)
			const idsToRemove = [
				17, 18, 19, 20, 22, 23, 27, 28, 32, 33, 34, 36, 39, 41, 42,
			]
			const filteredProducts = response.data.products.filter(
				item => !idsToRemove.includes(item.id)
			)
			setProducts(filteredProducts)
		} catch (error) {
			console.error('Ошибка при загрузке продуктов:', error)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	const displayedProducts = products.filter(
		product =>
			product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			product.description.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<div className={st.root}>
			<div className={st.shopFoto}></div>
			<div className={st.productContainer}>
				{displayedProducts.map(product => (
					<Product key={product.id} product={product} addToCart={addToCart} />
				))}
			</div>
		</div>
	)
}

export default ProductList
