[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPrefillPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The billing address to fill in. |
| `email` | Optional | string or null | The buyer's email address to fill in. `email`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesemail). |
| `phone` | Optional | string or null | The buyer's phone number to fill in. `phone`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesphone). |
| `shipping_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The shipping address to fill in. |
| `shipping_recipient_name` | Optional | string or null | The name of the person receiving the delivery, to fill in with the shipping address. `shipping_recipient_name`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesshipping_recipient_name). |

### CheckoutPrefillPreviousAttributes.email

### CheckoutPrefillPreviousAttributes.email variant 1

anyOf variant 1: The buyer's email address to fill in..

- Value shape: string. The buyer's email address to fill in. 

### CheckoutPrefillPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. The buyer's email address to fill in. 

### CheckoutPrefillPreviousAttributes.phone

### CheckoutPrefillPreviousAttributes.phone variant 1

anyOf variant 1: The buyer's phone number to fill in..

- Value shape: string. The buyer's phone number to fill in. 

### CheckoutPrefillPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. The buyer's phone number to fill in. 

### CheckoutPrefillPreviousAttributes.shipping_recipient_name

### CheckoutPrefillPreviousAttributes.shipping_recipient_name variant 1

anyOf variant 1: The name of the person receiving the delivery, to fill in with the shipping address..

- Value shape: string. The name of the person receiving the delivery, to fill in with the shipping address. The name of the person receiving the delivery, to fill in with the shipping address. minLength: `1`. maxLength: `200`. 

### CheckoutPrefillPreviousAttributes.shipping_recipient_name variant 2

anyOf variant 2.

- Value shape: null. The name of the person receiving the delivery, to fill in with the shipping address. 

