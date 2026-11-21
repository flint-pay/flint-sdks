[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBillingContactPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Billing address entered by the buyer. Null when no billing address was collected. |
| `name` | Optional | string or null | Billing name entered by the buyer. `name`: [declared alternatives](../models/CheckoutBillingContactPreviousAttributes.md#checkoutbillingcontactpreviousattributesname). |

### CheckoutBillingContactPreviousAttributes.name

### CheckoutBillingContactPreviousAttributes.name variant 1

anyOf variant 1: Billing name entered by the buyer..

- Value shape: string. Billing name entered by the buyer. 

### CheckoutBillingContactPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Billing name entered by the buyer. 

