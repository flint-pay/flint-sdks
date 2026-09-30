
import type { PaymentCollection } from './PaymentCollection.js';
import type { PaymentIntent } from './PaymentIntent.js';

export type CreateOrderPaymentIntentResult = { "payment_collection": PaymentCollection; "payment_intent": PaymentIntent; };
