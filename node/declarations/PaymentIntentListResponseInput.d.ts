
import type { PaymentIntentInput } from './PaymentIntentInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PaymentIntentListResponseInput = { "data": Array<PaymentIntentInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
