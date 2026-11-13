[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneCondition







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | ID of the delivery zone the address must be inside. minLength: `1`. Example: `"dzone_01KEZF7C005RY7KGCN4M2CH5WP"`. |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryZoneCondition variant 1

anyOf variant 1: Declared schema DeliveryZoneCondition. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`..

No additional constraints.

### DeliveryZoneCondition variant 2

anyOf variant 2: Declared schema DeliveryZoneConditionRequest. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`..

No additional constraints.

