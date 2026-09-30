
import type { PaymentLink } from './PaymentLink.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentLinkResponse = { "data": PaymentLink; "meta"?: ResponseMeta; "request_id"?: string; };
