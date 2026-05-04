import { getProducts } from '@/services/productService'
import ProductItem from './productItem'
import './productList.css'
interface ProductListProps {
	search?: string
	promo?: boolean
}

const ProductList = async ({ search, promo }: ProductListProps) => {
	const data = await getProducts()
	const filteredProducts = data.products.filter(p => {
		const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase())
		const matchesPromo = !promo || (p.promotion && p.promotion.percentage > 0)

		return matchesSearch && matchesPromo
	})

	return (
		<section>
			<h2>
				Sprzęt sportowy <span className='counter'>{filteredProducts.length} produktów</span>
			</h2>

			<div className='itemsContainer'>
				{filteredProducts.length > 0 ? (
					filteredProducts.map(prod => <ProductItem key={prod.articleNumber} product={prod} />)
				) : (
					<p>Nie znaleziono przedmiotów</p>
				)}
			</div>
		</section>
	)
}

export default ProductList
