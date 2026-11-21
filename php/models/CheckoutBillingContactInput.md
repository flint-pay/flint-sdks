[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBillingContactInput

Billing details collected in Checkout for a successful payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | Billing address entered by the buyer. Null when no billing address was collected. |
| `name` | Required | string | Billing name entered by the buyer. |

