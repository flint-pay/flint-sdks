
import type { Order } from './Order.js';
import type { OrderPaymentAttempt } from './OrderPaymentAttempt.js';

export type CancelOrderPaymentAttemptResult = { "order": Order; "payment_attempt"?: OrderPaymentAttempt; };
