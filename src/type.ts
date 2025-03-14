export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	images: string[]
}

export interface ICartItem extends IProduct {
	quantity: number
}
