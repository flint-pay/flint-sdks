
import type { Customer } from './Customer.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerResponse = { "data": Customer; "meta"?: ResponseMeta; "request_id"?: string; };
