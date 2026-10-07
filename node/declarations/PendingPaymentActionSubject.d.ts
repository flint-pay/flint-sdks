
import type { PendingPaymentActionPaymentIntentSubject } from './PendingPaymentActionPaymentIntentSubject.js';
import type { PendingPaymentActionSetupPaymentSourceSubject } from './PendingPaymentActionSetupPaymentSourceSubject.js';

/** Typed subject for a pending order payment action. Exactly one subject is present. */ export type PendingPaymentActionSubject = { /** PaymentIntent that requires buyer authentication. It can be a standalone intent or an order-owned payment leg. */ "payment_intent"?: PendingPaymentActionPaymentIntentSubject; /** Future-billing payment method setup that requires buyer authentication. */ "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject; };
