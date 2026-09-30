


export type StripePaymentIntentClientActionInput = { /** PaymentIntent client secret to pass to Stripe.js handleNextAction. */ "client_secret": string; /** Stripe.js operation to perform. Today this is handle_next_action. */ "stripe_js_call": "handle_next_action"; };
