
import type { InvoiceAutopayRetryPolicy } from './InvoiceAutopayRetryPolicy.js';
import type { InvoicePaymentPolicy } from './InvoicePaymentPolicy.js';
import type { InvoiceReminderPolicy } from './InvoiceReminderPolicy.js';
import type { PostalAddress } from './PostalAddress.js';

export type InvoiceSettings = { "autopay_retry_policy"?: InvoiceAutopayRetryPolicy; /** maxLength: 12. pattern: ^[A-Za-z0-9_-]*$. */ "credit_note_number_prefix"?: string; "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {}); /** maxLength: 4096. */ "default_footer"?: string; /** pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. */ "default_invoice_payment_term_id"?: string; /** maxLength: 4096. */ "default_memo"?: string; /** maxLength: 12. pattern: ^[A-Za-z0-9_-]*$. */ "invoice_number_prefix"?: string; "payment_policy"?: InvoicePaymentPolicy; "reminder_policy"?: InvoiceReminderPolicy; "remit_to_address"?: PostalAddress; /** Format: email. maxLength: 255. */ "reply_to_email"?: string; /** maxLength: 255. */ "timezone"?: string; };
