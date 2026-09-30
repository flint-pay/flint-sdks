
import type { Customer } from './Customer.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerListResponse = { "data": Array<Customer>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
