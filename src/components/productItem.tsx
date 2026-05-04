'use client'

import { Product } from '@/types/product'
import Image from 'next/image'
import './productItem.css'
import { useCart } from '@/context/CartContext'
import { Camera, Heart } from 'lucide-react'
import { useState } from 'react'
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
	const [favItem, setFavItem] = useState(false)

	const [isClicked, setIsClicked] = useState(false)

	const handleAddToCart = () => {
		addToCart()
		setIsClicked(true)

		setTimeout(() => setIsClicked(false), 200)
	}

	return (
		<div className='itemContainer'>
			<div className='imageSection'>
				{product.image?.link ? (
					<Image src={product.image.link} alt={product.image.altText || product.title} fill className='productImg' />
				) : (
					<div className='placeholder'>
						<Camera size={48} color='rgba(255,255,255,0.3)' strokeWidth={1.5} />
					</div>
				)}

				{hasPromotion && <span className='saleSign'>Promocja!</span>}
				<button className={`wishlistBtn ${favItem ? 'active' : ''}`} onClick={() => setFavItem(prev => !prev)}>
					<Heart size={16} className='heartIcon' />
				</button>
			</div>
			<div className='contentWrapper'>
				<div className='leftSideContainer'>
					<p className='brandName'>{product.brandName}</p>
					<h3>{product.title}</h3>

					<div className='priceContainer'>
						{hasPromotion ? (
							<>
								<span className='newPrice'>{finalPrice} zł</span>
								<span className='oldPrice'>{product.price} zł</span>
								<span className='saveInfo'>Oszczędzasz {product.promotion?.percentage}%!</span>
							</>
						) : (
							<span className='newPrice'>{product.price} zł</span>
						)}
					</div>
				</div>

				<div className='buttonContainer'>
					<button className={`buttonAddToCart ${isClicked ? 'active' : ''}`} onClick={handleAddToCart}>
						Do koszyka
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
