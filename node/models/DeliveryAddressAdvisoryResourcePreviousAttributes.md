[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressAdvisoryResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Optional | string or null | Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`. `role`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributesrole). |
| `suggested_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `verification_state` | Optional | string or null | How far address verification got. Values: `"needs_review"`, `"unverifiable"`. `verification_state`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributesverification_state). |

### DeliveryAddressAdvisoryResourcePreviousAttributes.role

### DeliveryAddressAdvisoryResourcePreviousAttributes.role variant 1

anyOf variant 1: Which address the advisory is about..

- Value shape: string. Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`.

### DeliveryAddressAdvisoryResourcePreviousAttributes.role variant 2

anyOf variant 2.

- Value shape: null. Which address the advisory is about. 

### DeliveryAddressAdvisoryResourcePreviousAttributes.verification_state

### DeliveryAddressAdvisoryResourcePreviousAttributes.verification_state variant 1

anyOf variant 1: How far address verification got..

- Value shape: string. How far address verification got. Values: `"needs_review"`, `"unverifiable"`.

### DeliveryAddressAdvisoryResourcePreviousAttributes.verification_state variant 2

anyOf variant 2.

- Value shape: null. How far address verification got. 

