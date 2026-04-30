import { z } from 'zod'

export const ImageSchema = z.object({
	link: z.string().min(1).optional().or(z.literal('')),
	altText: z.string().min(1).optional(),
})

export const PromotionSchema = z.object({
	name: z.string().min(1),
	percentage: z.number().int().min(0).max(100),
})

export const ProductSchema = z.object({
	articleNumber: z.string().regex(/^[0-9]{7}$/),
	ean: z
		.string()
		.regex(/^[0-9]{13}$/)
		.optional(),
	link: z.string().startsWith('/').optional(),
	image: ImageSchema,
	title: z.string().min(1),
	description: z.string().min(1),
	brandName: z.string().min(1),
	brandLogo: z.string().url().min(1),
	price: z.number().int().nonnegative(),
	promotion: PromotionSchema.nullable().optional(),
})

export const ApiResponseSchema = z.object({
	title: z.string().min(1),
	logo: ImageSchema,
	products: z.array(ProductSchema).min(1),
})

export type Product = z.infer<typeof ProductSchema>
export type ApiResponse = z.infer<typeof ApiResponseSchema>
export type Image = z.infer<typeof ImageSchema>
export type Promotion = z.infer<typeof PromotionSchema>
