'use client'

import { ShoppingCart, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import './navbar.css'
import { useCart } from '@/context/CartContext'
interface NavbarProps {
	logoData?: {
		link: string
		altText: string
		title?: string
	}
}

const Navbar = ({ logoData }: NavbarProps) => {
	const { cartCount } = useCart()

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
						<input type='text' placeholder='Szukaj...' />
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
