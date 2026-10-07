
import type { CheckoutAccessInput } from './CheckoutAccessInput.js';
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';

/** The checkout session and the credential to operate it. For hosted checkout, send the buyer to checkout_session.url. For embedded checkout, pass checkout_access.checkout_auth_token to your checkout client. */ export type CheckoutSessionLaunchResultInput = { "checkout_access": CheckoutAccessInput; "checkout_session": CheckoutSessionInput; /** True when an existing checkout of the requested surface was reused. For POST /v1/checkout-sessions, true only when a retry with the original Idempotency-Key returns the session that request created. */ "reused_existing": boolean; };
