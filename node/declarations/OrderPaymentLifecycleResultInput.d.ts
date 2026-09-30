
import type { OrderInput } from './OrderInput.js';
import type { OrderPaymentAttemptInput } from './OrderPaymentAttemptInput.js';
import type { PaymentIntentInput } from './PaymentIntentInput.js';

export type OrderPaymentLifecycleResultInput = { "order": OrderInput; "payment_attempt"?: OrderPaymentAttemptInput; "payment_intent": PaymentIntentInput; };
