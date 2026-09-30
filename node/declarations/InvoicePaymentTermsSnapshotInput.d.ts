
import type { InvoiceLateFeePolicyInput } from './InvoiceLateFeePolicyInput.js';
import type { InvoicePaymentTermCalculationInput } from './InvoicePaymentTermCalculationInput.js';

export type InvoicePaymentTermsSnapshotInput = { "calculation": InvoicePaymentTermCalculationInput; "invoice_payment_term_id": string; "late_fee_policy"?: InvoiceLateFeePolicyInput; "name": string; /** Format: int32. */ "revision": number; };
