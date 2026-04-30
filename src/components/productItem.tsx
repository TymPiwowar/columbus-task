import { getProducts } from '@/services/productService'

const productItem = async () => {
	const data = await getProducts()
	return (
		<div>
			{data.products.map(prod => (
				<div key={prod.articleNumber}>
					<p>{prod.title}</p>
					<p>{prod.image.altText}</p>
					<p>{prod.description}</p>
					<p>
						{prod.brandName} & {prod.brandLogo}
					</p>
					<p>Price: {prod.price}</p>
				</div>
			))}
		</div>
	)
}

export default productItem
