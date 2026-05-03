import ProductList from '@/components/productList'

async function Home({ searchParams }: { searchParams: { search?: string } }) {
	const resolvedSearchParams = await searchParams
	const searchTerm = resolvedSearchParams.search

	return (
		<main>
			<h1>Product Listing Page</h1>
			<ProductList search={searchTerm} />
		</main>
	)
}
export default Home
