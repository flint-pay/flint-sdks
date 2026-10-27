[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionInputAutomaticInput

The `automatic` variant of `InvoiceCollectionInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | merchant_default resolves the merchant setting at write time. Reads return the resolved mode. Values: `"automatic"`. |
| `payment_method_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `payment_policy` | Optional | [InvoicePaymentPolicyInput](../models/InvoicePaymentPolicyInput.md#invoicepaymentpolicyinput) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

