
import type { Product } from './Product.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ProductResponse = { "data": Product; "meta"?: ResponseMeta; "request_id"?: string; };
