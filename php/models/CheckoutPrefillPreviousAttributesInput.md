[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPrefillPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | The billing address to fill in. |
| `email` | Optional | string or null | The buyer's email address to fill in. `email`: [declared alternatives](../models/CheckoutPrefillPreviousAttributesInput.md#checkoutprefillpreviousattributesinputemail). |
| `phone` | Optional | string or null | The buyer's phone number to fill in. `phone`: [declared alternatives](../models/CheckoutPrefillPreviousAttributesInput.md#checkoutprefillpreviousattributesinputphone). |
| `shipping_address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | The shipping address to fill in. |
| `shipping_recipient_name` | Optional | string or null | The name of the person receiving the delivery, to fill in with the shipping address. `shipping_recipient_name`: [declared alternatives](../models/CheckoutPrefillPreviousAttributesInput.md#checkoutprefillpreviousattributesinputshipping_recipient_name). |

### CheckoutPrefillPreviousAttributesInput.email

### CheckoutPrefillPreviousAttributesInput.email variant 1

anyOf variant 1: The buyer's email address to fill in..

- Value shape: string. The buyer's email address to fill in. 

### CheckoutPrefillPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. The buyer's email address to fill in. 

### CheckoutPrefillPreviousAttributesInput.phone

### CheckoutPrefillPreviousAttributesInput.phone variant 1

anyOf variant 1: The buyer's phone number to fill in..

- Value shape: string. The buyer's phone number to fill in. 

### CheckoutPrefillPreviousAttributesInput.phone variant 2

anyOf variant 2.

- Value shape: null. The buyer's phone number to fill in. 

### CheckoutPrefillPreviousAttributesInput.shipping_recipient_name

### CheckoutPrefillPreviousAttributesInput.shipping_recipient_name variant 1

anyOf variant 1: The name of the person receiving the delivery, to fill in with the shipping address..

- Value shape: string. The name of the person receiving the delivery, to fill in with the shipping address. The name of the person receiving the delivery, to fill in with the shipping address. minLength: `1`. maxLength: `200`. 

### CheckoutPrefillPreviousAttributesInput.shipping_recipient_name variant 2

anyOf variant 2.

- Value shape: null. The name of the person receiving the delivery, to fill in with the shipping address. 

