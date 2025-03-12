import { addToCart } from '../../redux/slices/productsReducer'
import { useAppDispatch } from '../../redux/store'
import { IProduct } from '../../type'
import st from './Product.module.scss'

function Product({ product }: { product: IProduct }) {
	const dispatch = useAppDispatch()
	return (
		<div className={st.root}>
			<img
				src={product.images[0]}
				alt={product.title}
				className={st.productImg}
			/>
			<div className={st.productBody}>
				<p className={st.productName}>{product.title}</p>
				<p className={st.productDescription}>{product.description}</p>
				<div className={st.productInfo}>
					<p className={st.productPrice}>${product.price.toFixed(2)}</p>
					<button
						className={st.productBtn}
						onClick={() => dispatch(addToCart(product))}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product
