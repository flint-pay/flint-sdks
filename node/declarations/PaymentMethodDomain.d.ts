
import type { PaymentMethodDomainPaymentOption } from './PaymentMethodDomainPaymentOption.js';

export type PaymentMethodDomain = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "domain_name": string; "payment_method_domain_id": string; "payment_options": Array<PaymentMethodDomainPaymentOption>; "status": "active" | "inactive" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; "validation_status": "active" | "action_required" | "unavailable" | (string & {}); };
