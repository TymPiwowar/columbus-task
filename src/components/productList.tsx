import { getProducts } from '@/services/productService'
import ProductItem from './productItem'
import './productList.css'
interface ProductListProps {
	search?: string
}

const ProductList = async ({ search }: ProductListProps) => {
	const data = await getProducts()

	const countAll = data.products.length
	const filteredProducts = data.products.filter(prod => {
		if (!search) return true
		return (
			prod.title.toLowerCase().includes(search.toLowerCase()) ||
			prod.brandName.toLowerCase().includes(search.toLowerCase())
		)
	})

	return (
		<section>
			<h2>
				Sprzęt sportowy <span className='counter'>{countAll} produktów</span>
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
