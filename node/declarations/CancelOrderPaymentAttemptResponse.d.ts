
import type { PayOrderResult } from './PayOrderResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CancelOrderPaymentAttemptResponse = { "data": PayOrderResult; "meta"?: ResponseMeta; "request_id"?: string; };
