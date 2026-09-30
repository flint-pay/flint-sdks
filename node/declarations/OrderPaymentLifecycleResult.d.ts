
import type { Order } from './Order.js';
import type { OrderPaymentAttempt } from './OrderPaymentAttempt.js';
import type { PaymentIntent } from './PaymentIntent.js';

export type OrderPaymentLifecycleResult = { "order": Order; "payment_attempt"?: OrderPaymentAttempt; "payment_intent": PaymentIntent; };
