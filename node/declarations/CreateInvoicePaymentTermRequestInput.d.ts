
import type { InvoiceLateFeePolicyInput } from './InvoiceLateFeePolicyInput.js';
import type { InvoicePaymentTermCalculationInput } from './InvoicePaymentTermCalculationInput.js';

export type CreateInvoicePaymentTermRequestInput = { "calculation": InvoicePaymentTermCalculationInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicyInput; "name": string; };
