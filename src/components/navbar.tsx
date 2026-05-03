'use client'

import { ShoppingCart, Search } from 'lucide-react'
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

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push(input ? `/?search=${input}` : '/')
		}, 200)

		return () => clearTimeout(timer)
	}, [input, router])

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
