
import type { CreatePaymentIntentResult } from './CreatePaymentIntentResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreateOrderPaymentIntentResponse = { "data": CreatePaymentIntentResult; "meta"?: ResponseMeta; "request_id"?: string; };
