
import type { InvoiceAutopayRetryPolicyInput } from './InvoiceAutopayRetryPolicyInput.js';
import type { InvoicePaymentPolicyInput } from './InvoicePaymentPolicyInput.js';
import type { InvoiceReminderPolicyInput } from './InvoiceReminderPolicyInput.js';
import type { PostalAddressInput } from './PostalAddressInput.js';

export type InvoiceSettingsInput = { "autopay_retry_policy"?: InvoiceAutopayRetryPolicyInput; /** maxLength: 12. pattern: ^[A-Za-z0-9_-]*$. */ "credit_note_number_prefix"?: string; "default_collection_mode"?: "buyer_initiated" | "automatic" | "external"; /** maxLength: 4096. */ "default_footer"?: string; /** pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. */ "default_invoice_payment_term_id"?: string; /** maxLength: 4096. */ "default_memo"?: string; /** maxLength: 12. pattern: ^[A-Za-z0-9_-]*$. */ "invoice_number_prefix"?: string; "payment_policy"?: InvoicePaymentPolicyInput; "reminder_policy"?: InvoiceReminderPolicyInput; "remit_to_address"?: PostalAddressInput; /** Format: email. maxLength: 255. */ "reply_to_email"?: string; /** maxLength: 255. */ "timezone"?: string; };
