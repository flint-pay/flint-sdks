
import type { CheckoutAccessInput } from './CheckoutAccessInput.js';
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { HostedCheckoutInput } from './HostedCheckoutInput.js';

/** Checkout-session access returned for hosted or embedded checkout creation. */ export type CheckoutSessionLaunchResultInput = { "checkout_access": CheckoutAccessInput; "checkout_session": CheckoutSessionInput; "hosted_checkout"?: HostedCheckoutInput; };
