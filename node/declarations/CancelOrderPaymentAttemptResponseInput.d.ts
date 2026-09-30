
import type { PayOrderResultInput } from './PayOrderResultInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CancelOrderPaymentAttemptResponseInput = { "data": PayOrderResultInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
