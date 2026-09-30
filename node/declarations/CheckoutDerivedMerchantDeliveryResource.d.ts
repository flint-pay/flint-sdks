
import type { DeliveryInputRequirement } from './DeliveryInputRequirement.js';
import type { DeliveryMerchantDiagnostic } from './DeliveryMerchantDiagnostic.js';
import type { DeliveryQuoteChoiceGroupResource } from './DeliveryQuoteChoiceGroupResource.js';

export type CheckoutDerivedMerchantDeliveryResource = { "choice_groups": Array<DeliveryQuoteChoiceGroupResource>; "delivery_quote_id"?: string; "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; /** Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. */ "input_requirements": Array<DeliveryInputRequirement>; "merchant_diagnostics": Array<DeliveryMerchantDiagnostic>; };
