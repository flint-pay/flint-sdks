[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBillingContact

Billing details collected in Checkout for a successful payment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Billing address entered by the buyer. Null when no billing address was collected. |
| `name` | Required | string | Billing name entered by the buyer. |

