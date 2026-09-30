


/** One-time client authority for the named Stripe object. This payload always names the Stripe.js call and carries its client secret. */ export type StripeClientAuthority = { /** Stripe client secret for the named PaymentIntent or SetupIntent. */ "client_secret": string; /** Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone PaymentIntents use payment_collection plus server confirmation instead of initial confirm_payment authority. */ "stripe_js_call": "confirm_payment" | "confirm_setup" | (string & {}); };
