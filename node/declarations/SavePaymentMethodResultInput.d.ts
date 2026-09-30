
import type { PaymentMethodInput } from './PaymentMethodInput.js';
import type { StripeClientSetupInput } from './StripeClientSetupInput.js';

export type SavePaymentMethodResultInput = { "client_setup"?: StripeClientSetupInput; "payment_method": PaymentMethodInput; };
