
import type { PaymentMethodInput } from './PaymentMethodInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PaymentMethodResponseInput = { "data": PaymentMethodInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
