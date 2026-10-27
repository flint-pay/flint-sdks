[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionExternalInput

The `external` variant of `InvoiceCollection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"external"`. |
| `payment_method_id` | Optional | string or null |  |
| `payment_policy` | Optional | [InvoicePaymentPolicyInput](../models/InvoicePaymentPolicyInput.md#invoicepaymentpolicyinput) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

