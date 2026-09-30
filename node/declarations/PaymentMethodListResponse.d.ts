
import type { PaymentMethod } from './PaymentMethod.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentMethodListResponse = { "data": Array<PaymentMethod>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
