
import type { ProductVariantInput } from './ProductVariantInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ProductVariantListResponseInput = { "data": Array<ProductVariantInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
