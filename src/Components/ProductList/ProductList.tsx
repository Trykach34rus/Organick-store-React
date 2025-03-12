import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getProducts } from '../../redux/slices/productsReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import Product from '../Product/Product'
import st from './ProductList.module.scss'

function ProductList() {
	const { searchValue } = useAppSelector(state => state.filter)
	const { products, productsLoading, productsError } = useAppSelector(
		state => state.products
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	const displayedProducts = products.filter(
		product =>
			product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			product.description.toLowerCase().includes(searchValue.toLowerCase())
	)
	const skeletons = [...new Array(10)].map((_, i) => (
		<Skeleton
			key={i}
			style={{
				width: '350px',
				height: '483px',
				borderRadius: '30px',
			}}
		/>
	))
	const mapProducts = displayedProducts.map(product => (
		<Product key={product.id} product={product} />
	))

	if (productsError) {
		return (
			<div className={st.root}>
				<div className={st.shopFoto}></div>
				<h2 className={st.error}>{productsError}</h2>
			</div>
		)
	}

	return (
		<div className={st.root}>
			<div className={st.shopFoto}></div>
			<div className={st.productContainer}>
				{productsLoading ? skeletons : mapProducts}
			</div>
		</div>
	)
}

export default ProductList
