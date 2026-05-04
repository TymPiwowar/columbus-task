'use client'

import { ShoppingCart, Search, Percent } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import './navbar.css'
import { useCart } from '@/context/CartContext'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
interface NavbarProps {
	logoData?: {
		link: string
		altText: string
		title?: string
	}
}

const Navbar = ({ logoData }: NavbarProps) => {
	const { cartCount } = useCart()

	const router = useRouter()
	const searchParams = useSearchParams()
	const [input, setInput] = useState(searchParams?.get('search') || '')
	const [onlyPromo, setOnlyPromo] = useState(searchParams?.get('promo') === 'true')

	useEffect(() => {
		const timer = setTimeout(() => {
			const params = new URLSearchParams()

			if (input) params.set('search', input)
			if (onlyPromo) params.set('promo', 'true')

			const queryString = params.toString()
			router.push(queryString ? `/?${queryString}` : '/')
		}, 100)

		return () => clearTimeout(timer)
	}, [input, onlyPromo, router])

	return (
		<header className='navbarHeader'>
			<nav className='navbarContainer'>
				<Link href='/' className='navbarLogo'>
					{logoData?.link && <Image src={logoData.link} alt={logoData.altText} width={32} height={32} />}
					<span className='logoText'>SportShop</span>
				</Link>
				<div className='navbarSearch'>
					<div className='searchInputWrapper'>
						<span className='searchIcon'>
							<Search />
						</span>
						<input type='text' value={input} placeholder='Szukaj...' onChange={e => setInput(e.target.value)} />
					</div>
					<button
						className={`promoFilter ${onlyPromo ? 'active' : ''}`}
						onClick={() => setOnlyPromo(!onlyPromo)}
						type='button'>
						<Percent size={16} />
						<span>Promocje</span>
					</button>
				</div>

				<div>
					<Link href='/' className='cartLink'>
						<span className='cartIcon'>
							<ShoppingCart />
						</span>

						<span className='cartBadge'>{cartCount}</span>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
