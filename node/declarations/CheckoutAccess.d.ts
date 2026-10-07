


/** Credential for operating one checkout session on the buyer's behalf. */ export type CheckoutAccess = { /** Checkout-session credential. On checkout-session-scoped requests, send it as X-Checkout-Session-Secret, with X-Checkout-Session-ID set to checkout_session.checkout_session_id. Hosted checkout does not need it: checkout_session.url carries its own one-time launch credential. */ "checkout_auth_token": string; };
