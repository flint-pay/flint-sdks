
import type { OrderPaymentLifecycleResult } from './OrderPaymentLifecycleResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrderPaymentLifecycleResponse = { "data": OrderPaymentLifecycleResult; "meta"?: ResponseMeta; "request_id"?: string; };
