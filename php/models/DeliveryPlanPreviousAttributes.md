[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPlanPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Optional | string or null | RFC3339 timestamp. `complete_by_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `first_arrival_at` | Optional | string or null | RFC3339 timestamp. `first_arrival_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `planned_delivery_count` | Optional | integer or null | Number of deliveries the plan makes. `planned_delivery_count`: [declared alternatives](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributesplanned_delivery_count). |
| `type` | Optional | string or null | Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`. `type`: [declared alternatives](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributestype). |

### DeliveryPlanPreviousAttributes.complete_by_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliveryPlanPreviousAttributes.first_arrival_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliveryPlanPreviousAttributes.planned_delivery_count

### DeliveryPlanPreviousAttributes.planned_delivery_count variant 1

anyOf variant 1: Number of deliveries the plan makes..

- Value shape: integer. Number of deliveries the plan makes. 

### DeliveryPlanPreviousAttributes.planned_delivery_count variant 2

anyOf variant 2.

- Value shape: null. Number of deliveries the plan makes. 

### DeliveryPlanPreviousAttributes.type

### DeliveryPlanPreviousAttributes.type variant 1

anyOf variant 1: Whether the items arrive together..

- Value shape: string. Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`.

### DeliveryPlanPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Whether the items arrive together. 

