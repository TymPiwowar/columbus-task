import Link from 'next/link'
import Image from 'next/image'
import './navbar.css'

interface NavbarProps {
	logoData?: {
		link: string
		altText: string
		title?: string
	}
}

const Navbar = ({ logoData }: NavbarProps) => {
	return (
		<header className='navbarHeader'>
			<nav className='navbarContainer'>
				<Link href='/' className='navbarLogo'>
					{logoData?.link && <Image src={logoData.link} alt={logoData.altText} width={32} height={32} />}
					<span className='logoText'>SportShop</span>
				</Link>
				<div className='navbarSearch'>
					<div className='searchInputWrapper'>
						<span className='searchIcon'>Lens icon here</span>
						<input type='text' placeholder='Szukaj...' />
					</div>
				</div>
				<div className='navbarActions'>
					<Link href='/cart' className='cartLink'>
						<span className='cartIcon'>cart icon here</span>

						<span className='cartBadge'>0</span>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
