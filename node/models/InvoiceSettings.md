[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSettings

Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `autopay_retry_policy` | Optional | [InvoiceAutopayRetryPolicy](../models/InvoiceAutopayRetryPolicy.md#invoiceautopayretrypolicy) | Replaced as a whole: send every field you want to keep. When to retry a failed automatic invoice payment, as a list of day offsets. |
| `credit_note_number_prefix` | Optional | string | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `default_collection_mode` | Optional | string | How new invoices that ask for `merchant_default` collection are collected. Defaults to `buyer_initiated`. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `default_footer` | Optional | string | Limited to 4096 characters (Unicode code points), counted before normalization. maxLength: `4096`. |
| `default_invoice_payment_term_id` | Optional | string | ID of the invoice payment term that applies to your invoices created with `payment_due.type` set to `merchant_default`. pattern: `^ipt_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `default_memo` | Optional | string | Limited to 4096 characters (Unicode code points), counted before normalization. maxLength: `4096`. |
| `invoice_number_prefix` | Optional | string | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Replaced as a whole: send every field you want to keep. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceSettings.md#invoicesettingspayment_policy). |
| `reminder_policy` | Optional | [InvoiceReminderPolicy](../models/InvoiceReminderPolicy.md#invoicereminderpolicy) | Replaced as a whole: send every field you want to keep. Rules for automatic invoice reminders, each sent a set number of days before or after the due date. |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) | Replaced as a whole: send every field you want to keep. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `reply_to_email` | Optional | string | Limited to 255 characters (Unicode code points), counted before normalization. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. |

### InvoiceSettings.payment_policy

Replaced as a whole: send every field you want to keep. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoiceCollection.md#invoicecollectionpayment_policy).

### InvoiceSettings.payment_policy.payment_option_limits[]

Field definitions: [InvoiceCollection.payment_policy.payment_option_limits[]](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limits).

