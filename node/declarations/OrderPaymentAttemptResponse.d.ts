
import type { OrderPaymentAttempt } from './OrderPaymentAttempt.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrderPaymentAttemptResponse = { "data": OrderPaymentAttempt; "meta"?: ResponseMeta; "request_id"?: string; };
