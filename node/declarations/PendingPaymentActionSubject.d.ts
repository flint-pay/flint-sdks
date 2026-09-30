


/** Typed subject for a pending order payment action. Exactly one subject is present. */ export type PendingPaymentActionSubject = { /** PaymentIntent that requires buyer authentication. It can be a standalone intent or an order-owned payment leg. */ "payment_intent"?: { "payment_intent_id": string; }; /** Future-billing payment method setup that requires buyer authentication. */ "setup_payment_source"?: { "payment_method_id": string; }; };
