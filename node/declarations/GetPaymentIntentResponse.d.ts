
import type { PaymentIntentResult } from './PaymentIntentResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GetPaymentIntentResponse = { "data": PaymentIntentResult; "meta"?: ResponseMeta; "request_id"?: string; };
