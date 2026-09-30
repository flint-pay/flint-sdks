
import type { OrderActivityInput } from './OrderActivityInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type OrderActivityListResponseInput = { "data": Array<OrderActivityInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
