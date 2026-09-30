
import type { PaymentIntent } from './PaymentIntent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentIntentResponse = { "data": PaymentIntent; "meta"?: ResponseMeta; "request_id"?: string; };
