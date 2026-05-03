'use client'

import { Product } from '@/types/product'
import Image from 'next/image'
import './productItem.css'
import { useCart } from '@/context/CartContext'
interface ProductItemProps {
	product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
	const hasPromotion = !!product.promotion
	const finalPrice =
		hasPromotion && product.promotion
			? (product.price * (1 - product.promotion.percentage / 100)).toFixed(2)
			: product.price

	const { addToCart } = useCart()

	return (
		<div className='itemContainer'>
			{product.image?.link && (
				<Image src={product.image.link} alt={product.image.altText || product.title} className='image' />
			)}
			{hasPromotion && (
				<div className='saleSign'>
					<p>sale!</p>
				</div>
			)}
			<div className='contentWrapper'>
				<h3>{product.title}</h3>
				<p>Brand: {product.brandName}</p>

				<div>
					{hasPromotion ? (
						<>
							<span className='newPrice'>{finalPrice} zł</span>
							<span className='oldPrice'>{product.price} zł</span>
						</>
					) : (
						<span>{product.price} zł</span>
					)}
				</div>
				<button className='buttonAddToCart' onClick={addToCart}>
					Do koszyka
				</button>
			</div>
		</div>
	)
}

export default ProductItem
