
import type { CheckoutAccess } from './CheckoutAccess.js';
import type { CheckoutSession } from './CheckoutSession.js';
import type { HostedCheckout } from './HostedCheckout.js';

/** Checkout-session access returned for hosted or embedded checkout creation. */ export type CheckoutSessionLaunchResult = { "checkout_access": CheckoutAccess; "checkout_session": CheckoutSession; "hosted_checkout"?: HostedCheckout; };
