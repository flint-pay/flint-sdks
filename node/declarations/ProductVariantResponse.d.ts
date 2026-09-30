
import type { ProductVariant } from './ProductVariant.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ProductVariantResponse = { "data": ProductVariant; "meta"?: ResponseMeta; "request_id"?: string; };
