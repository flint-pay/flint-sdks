
import type { PaymentLinkInput } from './PaymentLinkInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PaymentLinkListResponseInput = { "data": Array<PaymentLinkInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
