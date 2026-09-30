
import type { ProductOptionInput } from './ProductOptionInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ProductOptionListResponseInput = { "data": Array<ProductOptionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
