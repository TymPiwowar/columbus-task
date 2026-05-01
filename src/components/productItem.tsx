'use client'

import { Product } from '@/types/product'
import Image from 'next/image'
import './productItem.css'

interface ProductItemProps {
	product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
	const hasPromotion = !!product.promotion
	const finalPrice =
		hasPromotion && product.promotion
			? (product.price * (1 - product.promotion.percentage / 100)).toFixed(2)
			: product.price

	return (
		<div className='itemContainer'>
			{product.image?.link && (
				<Image src={product.image.link} alt={product.image.altText || product.title} width={200} height={200} />
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
				<button className='buttonAddToCart' onClick={() => console.log('Fake request: update cart')}>
					Do koszyka
				</button>
			</div>
		</div>
	)
}

export default ProductItem
