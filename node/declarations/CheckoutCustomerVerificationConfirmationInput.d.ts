
import type { CheckoutAccessInput } from './CheckoutAccessInput.js';
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';

/** The checkout after a confirmed code, and the credential that acts for the customer with the confirmed email. */ export type CheckoutCustomerVerificationConfirmationInput = { /** The new checkout credential, the only one that acts for the customer. Send checkout_auth_token as X-Checkout-Session-Secret on every later checkout request. The earlier credential keeps working for the checkout without the customer's saved cards or details. Omitted for purpose confirm_saved_payment_method, which keeps the checkout's credential. */ "checkout_access"?: CheckoutAccessInput; /** The checkout session, read as its new credential reads it: it acts for the customer with the confirmed email. */ "checkout_session": CheckoutSessionInput; };
