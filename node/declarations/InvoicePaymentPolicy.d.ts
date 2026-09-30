
import type { InvoicePaymentOptionLimit } from './InvoicePaymentOptionLimit.js';

export type InvoicePaymentPolicy = { /** maxItems: 5. */ "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>; /** maxItems: 100. */ "payment_option_limits"?: Array<InvoicePaymentOptionLimit>; "show_cost_comparison"?: boolean; };
