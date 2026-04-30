import { getProducts } from '@/services/productService'

async function Home() {
	const data = await getProducts()

	return (
		<main>
			<h1>Product Listing Page</h1>
			{data.products.map(prod => (
				<div key={prod.articleNumber}>
					<p>{prod.title}</p>
				</div>
			))}
		</main>
	)
}
export default Home
