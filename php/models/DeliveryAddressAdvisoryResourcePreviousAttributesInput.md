[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressAdvisoryResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Optional | string or null | Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`. `role`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributesInput.md#deliveryaddressadvisoryresourcepreviousattributesinputrole). |
| `suggested_address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `verification_state` | Optional | string or null | How far address verification got. Values: `"needs_review"`, `"unverifiable"`. `verification_state`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributesInput.md#deliveryaddressadvisoryresourcepreviousattributesinputverification_state). |

### DeliveryAddressAdvisoryResourcePreviousAttributesInput.role

### DeliveryAddressAdvisoryResourcePreviousAttributesInput.role variant 1

anyOf variant 1: Which address the advisory is about..

- Value shape: string. Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`.

### DeliveryAddressAdvisoryResourcePreviousAttributesInput.role variant 2

anyOf variant 2.

- Value shape: null. Which address the advisory is about. 

### DeliveryAddressAdvisoryResourcePreviousAttributesInput.verification_state

### DeliveryAddressAdvisoryResourcePreviousAttributesInput.verification_state variant 1

anyOf variant 1: How far address verification got..

- Value shape: string. How far address verification got. Values: `"needs_review"`, `"unverifiable"`.

### DeliveryAddressAdvisoryResourcePreviousAttributesInput.verification_state variant 2

anyOf variant 2.

- Value shape: null. How far address verification got. 

