
import type { InvoicePaymentOptionLimitInput } from './InvoicePaymentOptionLimitInput.js';

export type InvoicePaymentPolicyInput = { /** maxItems: 5. */ "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">; /** maxItems: 100. */ "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>; "show_cost_comparison"?: boolean; };
