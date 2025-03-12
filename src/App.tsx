import CartModal from './Components/CartModal/CartModal.tsx'
import Footer from './Components/Footer/Footer.tsx'
import Header from './Components/Header/Header.tsx'
import ProductList from './Components/ProductList/ProductList.tsx'

function App() {
	return (
		<div>
			<Header />
			<ProductList />
			<Footer />
			<CartModal />
		</div>
	)
}
export default App
