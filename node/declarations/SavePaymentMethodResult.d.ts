
import type { PaymentMethod } from './PaymentMethod.js';
import type { StripeClientSetup } from './StripeClientSetup.js';

export type SavePaymentMethodResult = { "client_setup"?: StripeClientSetup; "payment_method": PaymentMethod; };
