
import type { PaymentMethodInput } from './PaymentMethodInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PaymentMethodListResponseInput = { "data": Array<PaymentMethodInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
