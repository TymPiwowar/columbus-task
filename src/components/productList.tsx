import { getProducts } from '@/services/productService'
import ProductItem from './productItem'
import './productList.css'
const ProductList = async () => {
	const data = await getProducts()

	const countAll = data.products.length

	return (
		<section>
			<h2>
				Sprzęt sportowy <span className='counter'>{countAll} produktów</span>
			</h2>

			<div className='itemsContainer'>
				{data.products.map(prod => (
					<ProductItem key={prod.articleNumber} product={prod} />
				))}
			</div>
		</section>
	)
}

export default ProductList
