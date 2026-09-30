
import type { InvoiceLateFeePolicy } from './InvoiceLateFeePolicy.js';
import type { InvoicePaymentTermCalculation } from './InvoicePaymentTermCalculation.js';

export type CreateInvoicePaymentTermRequest = { "calculation": InvoicePaymentTermCalculation; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicy; "name": string; };
