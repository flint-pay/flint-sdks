
import type { StripePaymentClientAction } from './StripePaymentClientAction.js';

/** Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint. */ export type PaymentClientAction = { "stripe": StripePaymentClientAction; };
