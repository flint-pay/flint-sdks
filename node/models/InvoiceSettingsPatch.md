[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceSettingsPatch

Changes to a merchant's invoice settings. Send only the fields to change, and send null on a nullable field to clear it. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `autopay_retry_policy` | Optional | [InvoiceAutopayRetryPolicy](../models/InvoiceAutopayRetryPolicy.md#invoiceautopayretrypolicy) or null | Replaced as a whole: send every field you want to keep. |
| `credit_note_number_prefix` | Optional | string or null | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send null to clear it. minLength: `1`. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `default_collection_mode` | Optional | string or null | Values: `"buyer_initiated"`, `"automatic"`, `"external"`, `null`. |
| `default_footer` | Optional | string or null | Limited to 4096 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `default_invoice_payment_term_id` | Optional | string or null | Send null to clear it. minLength: `1`. pattern: `^ipt_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `default_memo` | Optional | string or null | Limited to 4096 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `invoice_number_prefix` | Optional | string or null | Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send null to clear it. minLength: `1`. maxLength: `12`. pattern: `^[A-Za-z0-9_-]*$`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) or null | Replaced as a whole: send every field you want to keep. |
| `reminder_policy` | Optional | [InvoiceReminderPolicy](../models/InvoiceReminderPolicy.md#invoicereminderpolicy) or null | Replaced as a whole: send every field you want to keep. |
| `remit_to_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) or null | Replaced as a whole: send every field you want to keep. |
| `reply_to_email` | Optional | string or null | Limited to 255 characters (Unicode code points), counted before normalization. Send null to clear it. Format: `email`. minLength: `1`. maxLength: `255`. |
| `timezone` | Optional | string or null | Limited to 255 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: `1`. maxLength: `255`. |

