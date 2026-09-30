
import type { Product } from './Product.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ProductListResponse = { "data": Array<Product>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
