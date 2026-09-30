
import type { InvoiceLateFeePolicy } from './InvoiceLateFeePolicy.js';
import type { InvoicePaymentTermCalculation } from './InvoicePaymentTermCalculation.js';

export type InvoicePaymentTermsSnapshot = { "calculation": InvoicePaymentTermCalculation; "invoice_payment_term_id": string; "late_fee_policy"?: InvoiceLateFeePolicy; "name": string; /** Format: int32. */ "revision": number; };
