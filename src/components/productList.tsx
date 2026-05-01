import { getProducts } from '@/services/productService'
import ProductItem from './productItem'
import './productList.css'
const ProductList = async () => {
	const data = await getProducts()

	return (
		<section>
			<div className='itemsContainer'>
				{data.products.map(prod => (
					<ProductItem key={prod.articleNumber} product={prod} />
				))}
			</div>
		</section>
	)
}

export default ProductList
