
import type { ProductOption } from './ProductOption.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ProductOptionResponse = { "data": ProductOption; "meta"?: ResponseMeta; "request_id"?: string; };
