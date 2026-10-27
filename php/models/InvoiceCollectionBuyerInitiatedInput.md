[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBuyerInitiatedInput

The `buyer_initiated` variant of `InvoiceCollection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"buyer_initiated"`. |
| `payment_method_id` | Optional | string or null |  |
| `payment_policy` | Required | [InvoicePaymentPolicyInput](../models/InvoicePaymentPolicyInput.md#invoicepaymentpolicyinput) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

