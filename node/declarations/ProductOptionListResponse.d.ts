
import type { ProductOption } from './ProductOption.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ProductOptionListResponse = { "data": Array<ProductOption>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
