
import type { PaymentIntentInput } from './PaymentIntentInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PaymentIntentResponseInput = { "data": PaymentIntentInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
