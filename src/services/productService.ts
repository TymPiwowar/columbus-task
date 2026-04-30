import { ApiResponseSchema, ApiResponse } from '@/types/product'

export async function getProducts(): Promise<ApiResponse> {
	const res = await fetch('https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise', {
		headers: {
			'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
		},
	})

	if (!res.ok) {
		throw new Error('Failed to fetch products')
	}

	const rawData = await res.json()

	return ApiResponseSchema.parse(rawData)
}
