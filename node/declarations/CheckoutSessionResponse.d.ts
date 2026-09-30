
import type { CheckoutSession } from './CheckoutSession.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CheckoutSessionResponse = { "data": CheckoutSession; "meta"?: ResponseMeta; "request_id"?: string; };
