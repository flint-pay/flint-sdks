
import type { PaymentMethodDomain } from './PaymentMethodDomain.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentMethodDomainListResponse = { "data": Array<PaymentMethodDomain>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
