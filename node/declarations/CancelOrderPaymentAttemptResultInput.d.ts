
import type { OrderInput } from './OrderInput.js';
import type { OrderPaymentAttemptInput } from './OrderPaymentAttemptInput.js';

export type CancelOrderPaymentAttemptResultInput = { "order": OrderInput; "payment_attempt"?: OrderPaymentAttemptInput; };
