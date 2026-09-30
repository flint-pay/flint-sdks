
import type { PaymentMethod } from './PaymentMethod.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentMethodResponse = { "data": PaymentMethod; "meta"?: ResponseMeta; "request_id"?: string; };
