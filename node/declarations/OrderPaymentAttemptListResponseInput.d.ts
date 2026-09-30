
import type { OrderPaymentAttemptInput } from './OrderPaymentAttemptInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type OrderPaymentAttemptListResponseInput = { "data": Array<OrderPaymentAttemptInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
