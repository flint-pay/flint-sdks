import type { InputValue } from '../runtime.js';
import type { SendOrderReceiptRequestInput } from './SendOrderReceiptRequestInput.js';

export type OrdersSendReceiptInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<SendOrderReceiptRequestInput>; };
