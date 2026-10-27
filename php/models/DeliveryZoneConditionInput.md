[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConditionInput

Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | minLength: `1`. |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

