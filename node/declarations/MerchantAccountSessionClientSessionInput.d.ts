
import type { MerchantAccountSessionStripeInput } from './MerchantAccountSessionStripeInput.js';

/** Short-lived browser initialization data for an embedded merchant account session. */ export type MerchantAccountSessionClientSessionInput = { /** Expiry of the embedded account session client secret in UTC. Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: date-time. */ "expires_at": string | globalThis.Date; /** Stripe Connect initialization credentials and authorized component collection options. Connect initializes from the account session client secret and does not take a connected account ID. */ "stripe": MerchantAccountSessionStripeInput; };
