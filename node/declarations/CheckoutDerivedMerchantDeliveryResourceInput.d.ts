
import type { DeliveryInputRequirementInput } from './DeliveryInputRequirementInput.js';
import type { DeliveryMerchantDiagnosticInput } from './DeliveryMerchantDiagnosticInput.js';
import type { DeliveryQuoteChoiceGroupResourceInput } from './DeliveryQuoteChoiceGroupResourceInput.js';

export type CheckoutDerivedMerchantDeliveryResourceInput = { "choice_groups": Array<DeliveryQuoteChoiceGroupResourceInput>; "delivery_quote_id"?: string; "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote"; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string | globalThis.Date; /** Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. */ "input_requirements": Array<DeliveryInputRequirementInput>; "merchant_diagnostics": Array<DeliveryMerchantDiagnosticInput>; };
