[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConditionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Optional | string or null | ID of the delivery zone the address must be inside. `delivery_zone_id`: [declared alternatives](../models/DeliveryZoneConditionPreviousAttributes.md#deliveryzoneconditionpreviousattributesdelivery_zone_id). |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject). |

### DeliveryZoneConditionPreviousAttributes.delivery_zone_id

### DeliveryZoneConditionPreviousAttributes.delivery_zone_id variant 1

anyOf variant 1: ID of the delivery zone the address must be inside..

- Value shape: string. ID of the delivery zone the address must be inside. ID of the delivery zone the address must be inside. minLength: `1`. Example: `"dzone_01KEZF7C005RY7KGCN4M2CH5WP"`. 

### DeliveryZoneConditionPreviousAttributes.delivery_zone_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery zone the address must be inside. 

### DeliveryZoneConditionPreviousAttributes.subject

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject).

