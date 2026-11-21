[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBillingContactPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Billing address entered by the buyer. Null when no billing address was collected. |
| `name` | Optional | string or null | Billing name entered by the buyer. `name`: [declared alternatives](../models/CheckoutBillingContactPreviousAttributesInput.md#checkoutbillingcontactpreviousattributesinputname). |

### CheckoutBillingContactPreviousAttributesInput.name

### CheckoutBillingContactPreviousAttributesInput.name variant 1

anyOf variant 1: Billing name entered by the buyer..

- Value shape: string. Billing name entered by the buyer. 

### CheckoutBillingContactPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Billing name entered by the buyer. 

