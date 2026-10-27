[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentPolicyInput

Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Required | Array of string | maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Optional | Array of [InvoicePaymentOptionLimitInput](../models/InvoicePaymentOptionLimitInput.md#invoicepaymentoptionlimitinput) | maxItems: `100`. |
| `show_cost_comparison` | Optional | boolean |  |

