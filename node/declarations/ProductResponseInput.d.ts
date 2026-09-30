
import type { ProductInput } from './ProductInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ProductResponseInput = { "data": ProductInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
