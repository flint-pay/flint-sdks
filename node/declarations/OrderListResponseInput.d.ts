
import type { OrderInput } from './OrderInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type OrderListResponseInput = { "data": Array<OrderInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
