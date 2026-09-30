
import type { ProductVariant } from './ProductVariant.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ProductVariantListResponse = { "data": Array<ProductVariant>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
