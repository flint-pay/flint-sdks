[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBuyerInitiatedPaymentPolicy

Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Required | Array of string | maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Optional | Array of ([InvoiceCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItem](../models/InvoiceCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItem.md#invoicecollectionbuyerinitiatedpaymentpolicypaymentoptionlimitsitem) and [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit)) | maxItems: `100`. |
| `show_cost_comparison` | Optional | boolean |  |

