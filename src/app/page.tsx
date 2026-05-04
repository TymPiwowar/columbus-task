import ProductList from '@/components/productList'

async function Home({ searchParams }: { searchParams: { search?: string; promo?: string } }) {
	const resolvedParams = await searchParams
	const searchTerm = resolvedParams.search
	const isPromoOnly = resolvedParams.promo === 'true'

	return (
		<main>
			<ProductList search={searchTerm} promo={isPromoOnly} />
		</main>
	)
}
export default Home
