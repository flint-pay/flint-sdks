
import type { ProductInput } from './ProductInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ProductListResponseInput = { "data": Array<ProductInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
