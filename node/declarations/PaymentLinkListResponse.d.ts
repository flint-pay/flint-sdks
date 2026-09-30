
import type { PaymentLink } from './PaymentLink.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentLinkListResponse = { "data": Array<PaymentLink>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
