[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkPaymentPatchRequestInput

Changes to a payment link's payment settings. Send null on the payment note to clear it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `500`. |

