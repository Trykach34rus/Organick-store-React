import Cart from '../../assets/ProgectFoto/Cart.svg'
import { handleSearch } from '../../redux/slices/filterReducer'
import { setIsCartOpen } from '../../redux/slices/productsReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import st from './Header.module.scss'

function Header() {
	const { searchValue } = useAppSelector(state => state.filter)
	const { cartItems } = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	return (
		<header className={st.root}>
			<div className={st.headerTop}>
				<div className={st.headerLogo}>Organick</div>
				<nav className={st.navigator}>
					<p className={st.navigatorButton}>Home</p>
					<p className={st.navigatorButton}>About</p>
					<p className={st.navigatorButton}>Pages</p>
					<p className={st.navigatorButton}>Shop</p>
					<p className={st.navigatorButton}>Projects</p>
					<p className={st.navigatorButton}>News</p>
				</nav>
				<div className={st.inputContainer}>
					<input
						className={st.inputSearch}
						type='text'
						placeholder='Search...'
						value={searchValue}
						onChange={e => dispatch(handleSearch(e.target.value))}
					/>
					<div
						className={st.cartBtnContainer}
						onClick={() => dispatch(setIsCartOpen(true))}
					>
						<button className={st.cartBtn}>
							<img src={Cart} />
						</button>
						Cart <span className={st.cartCount}>{cartItems.length}</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
