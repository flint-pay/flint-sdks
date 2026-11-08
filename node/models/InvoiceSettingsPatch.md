[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSettingsPatch

Changes to a merchant's invoice settings. Send only the fields to change, and send null on a nullable field to clear it. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `autopay_retry_policy` | Optional | [InvoiceAutopayRetryPolicy](../models/InvoiceAutopayRetryPolicy.md#invoiceautopayretrypolicy) or null | Replaced as a whole: send every field you want to keep. |
| `credit_note_number_prefix` | Optional | string or null | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send null to clear it. minLength: `1`. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `default_collection_mode` | Optional | string or null | How new invoices that ask for `merchant_default` collection are collected. Defaults to `buyer_initiated`. Values: `"buyer_initiated"`, `"automatic"`, `"external"`, `null`. |
| `default_footer` | Optional | string or null | Limited to 4096 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `default_invoice_payment_term_id` | Optional | string or null | ID of the invoice payment term that applies to your invoices created with `payment_due.type` set to `merchant_default`. minLength: `1`. pattern: `^ipt_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `default_memo` | Optional | string or null | Limited to 4096 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `invoice_number_prefix` | Optional | string or null | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send null to clear it. minLength: `1`. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) or null | Replaced as a whole: send every field you want to keep. `payment_policy`: [declared alternatives](../models/InvoiceSettingsPatch.md#invoicesettingspatchpayment_policy). |
| `reminder_policy` | Optional | [InvoiceReminderPolicy](../models/InvoiceReminderPolicy.md#invoicereminderpolicy) or null | Replaced as a whole: send every field you want to keep. |
| `remit_to_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) or null | Replaced as a whole: send every field you want to keep. |
| `reply_to_email` | Optional | string or null | Limited to 255 characters (Unicode code points), counted before normalization. Send null to clear it. Format: `email`. minLength: `1`. maxLength: `255`. Example: `"buyer@example.com"`. |

### InvoiceSettingsPatch.payment_policy

Replaced as a whole: send every field you want to keep.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Conditional | Array of string | The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Conditional | Array of [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit) | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. `payment_option_limits[]`: [field definitions](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policypayment_option_limits). |
| `show_cost_comparison` | Conditional | boolean | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. |

### InvoiceSettingsPatch.payment_policy variant 1

anyOf InvoicePaymentPolicyRequest: Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison..

- Required: `enabled_payment_options`.
- Optional: `payment_option_limits`, `show_cost_comparison`.

### InvoiceSettingsPatch.payment_policy variant 2

anyOf variant 2.

- Undeclared: `enabled_payment_options`, `payment_option_limits`, `show_cost_comparison`.
- Value shape: null. Replaced as a whole: send every field you want to keep. 

### InvoiceSettingsPatch.payment_policy variant 1.payment_option_limits[]

Field definitions: [InvoiceCollectionExternal variant 2.payment_policy.payment_option_limits[]](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policypayment_option_limits).

