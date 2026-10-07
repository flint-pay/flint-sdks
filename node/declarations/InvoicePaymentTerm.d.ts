
import type { InvoiceLateFeePolicy } from './InvoiceLateFeePolicy.js';
import type { InvoicePaymentTermCalculation } from './InvoicePaymentTermCalculation.js';

export type InvoicePaymentTerm = { "calculation": InvoicePaymentTermCalculation; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "invoice_payment_term_id": string; "late_fee_policy"?: InvoiceLateFeePolicy; "merchant_id": string; "name": string; "status": "active" | "archived" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; /** Format: int32. */ "version": number; };
