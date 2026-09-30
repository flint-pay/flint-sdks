
import type { PaymentMethodDomainInput } from './PaymentMethodDomainInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PaymentMethodDomainListResponseInput = { "data": Array<PaymentMethodDomainInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
