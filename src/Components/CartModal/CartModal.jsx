import st from './CartModal.module.scss'

function CartModal({
	isOpen,
	onClose,
	cartItems,
	onIncrease,
	onDecrease,
	onRemove,
}) {
	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)

	return (
		<div className={`${st.root} ${isOpen ? st.modalActive : ''}`}>
			<div className={st.modalContainer}>
				<div className={st.modalTop}>
					<h2 className={st.modalTitle}>
						Products: <span className={st.modalCount}>{cartItems.length}</span>
					</h2>
					<button className={st.modalClose} onClick={onClose}>
						X
					</button>
				</div>
				<div className={st.modalBody}>
					{cartItems.map(item => (
						<div key={item.id} className={st.modalItem}>
							<div className={st.modalLeft}>
								<img
									src={item.images[0]}
									alt={item.title}
									className={st.modalImg}
								/>
								<h3 className={st.modalName}>{item.title}</h3>
							</div>
							<div className={st.modalRight}>
								<button
									className={st.modalMinus}
									onClick={() => onDecrease(item.id)}
								>
									-
								</button>
								<span className={st.modalItemCount}>{item.quantity}</span>
								<button
									className={st.modalPlus}
									onClick={() => onIncrease(item.id)}
								>
									+
								</button>
								<p className={st.modalItemPrice}>${item.price.toFixed(2)}</p>
								<button
									className={st.modalDelete}
									onClick={() => onRemove(item.id)}
								>
									X
								</button>
							</div>
						</div>
					))}
				</div>
				<div className={st.modalFooter}>
					<h4 className={st.modalFooterTitle}>
						Full price:{' '}
						<span className={st.modalPrice}>${totalPrice.toFixed(2)}</span>
					</h4>
					<button className={st.modalBtn}>Purchase</button>
				</div>
			</div>
		</div>
	)
}

export default CartModal
