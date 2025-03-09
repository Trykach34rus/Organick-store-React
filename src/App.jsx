import { useState } from 'react'
import CartModal from './Components/CartModal/CartModal.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import ProductList from './Components/ProductList/ProductList.jsx'

function App() {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [searchValue, setSearchValue] = useState('')

	function addToCart(product) {
		const itemInCart = cartItems.find(item => item.id === product.id)
		if (itemInCart) {
			setCartItems(
				cartItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			)
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }])
		}
	}

	function handleSearch(value) {
		setSearchValue(value)
	}

	function handleIncrease(id) {
		setCartItems(
			cartItems.map(item =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}

	function handleDecrease(id) {
		setCartItems(
			cartItems
				.map(item => {
					if (item.id === id) {
						const newQuantity = item.quantity - 1
						return { ...item, quantity: newQuantity }
					}
					return item
				})
				.filter(item => item.quantity > 0)
		)
	}

	function handleRemove(id) {
		setCartItems(cartItems.filter(item => item.id !== id))
	}

	return (
		<div>
			<Header
				onCartClick={() => setIsCartOpen(true)}
				cartItems={cartItems}
				onSearch={handleSearch}
				searchValue={searchValue}
			/>
			<ProductList addToCart={addToCart} searchValue={searchValue} />
			<Footer />
			<CartModal
				isOpen={isCartOpen}
				onClose={() => setIsCartOpen(false)}
				cartItems={cartItems}
				onIncrease={handleIncrease}
				onDecrease={handleDecrease}
				onRemove={handleRemove}
			/>
		</div>
	)
}
export default App
