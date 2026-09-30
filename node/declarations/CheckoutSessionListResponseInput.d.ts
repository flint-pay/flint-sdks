
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CheckoutSessionListResponseInput = { "data": Array<CheckoutSessionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
