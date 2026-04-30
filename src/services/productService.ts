import { ApiResponseSchema, ApiResponse } from '@/types/product'

export async function getProducts(): Promise<ApiResponse> {
	const res = await fetch('https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise', {
		headers: {
			'x-api-key': '8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc',
		},
	})

	if (!res.ok) {
		throw new Error('Failed to fetch products')
	}

	const rawData = await res.json()

	return ApiResponseSchema.parse(rawData)
}
