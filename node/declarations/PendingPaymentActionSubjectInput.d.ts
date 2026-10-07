
import type { PendingPaymentActionPaymentIntentSubjectInput } from './PendingPaymentActionPaymentIntentSubjectInput.js';
import type { PendingPaymentActionSetupPaymentSourceSubjectInput } from './PendingPaymentActionSetupPaymentSourceSubjectInput.js';

/** Typed subject for a pending order payment action. Exactly one subject is present. */ export type PendingPaymentActionSubjectInput = { /** PaymentIntent that requires buyer authentication. It can be a standalone intent or an order-owned payment leg. */ "payment_intent"?: PendingPaymentActionPaymentIntentSubjectInput; /** Future-billing payment method setup that requires buyer authentication. */ "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubjectInput; };
