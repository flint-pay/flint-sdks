
import type { StripePaymentClientActionInput } from './StripePaymentClientActionInput.js';

/** Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint. */ export type PaymentClientActionInput = { "stripe": StripePaymentClientActionInput; };
