
import type { GetPaymentIntentResult } from './GetPaymentIntentResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GetPaymentIntentResponse = { "data": GetPaymentIntentResult; "meta"?: ResponseMeta; "request_id"?: string; };
