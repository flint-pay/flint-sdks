[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBuyerInitiated

The `buyer_initiated` variant of `InvoiceCollection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"buyer_initiated"`. |
| `payment_method_id` | Optional | string or null |  |
| `payment_policy` | Required | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

