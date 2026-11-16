[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPlanPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Optional | string or null | RFC3339 timestamp. `complete_by_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `first_arrival_at` | Optional | string or null | RFC3339 timestamp. `first_arrival_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `planned_delivery_count` | Optional | integer or null | Number of deliveries the plan makes. `planned_delivery_count`: [declared alternatives](../models/DeliveryPlanPreviousAttributesInput.md#deliveryplanpreviousattributesinputplanned_delivery_count). |
| `type` | Optional | string or null | Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`. `type`: [declared alternatives](../models/DeliveryPlanPreviousAttributesInput.md#deliveryplanpreviousattributesinputtype). |

### DeliveryPlanPreviousAttributesInput.complete_by_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### DeliveryPlanPreviousAttributesInput.first_arrival_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### DeliveryPlanPreviousAttributesInput.planned_delivery_count

### DeliveryPlanPreviousAttributesInput.planned_delivery_count variant 1

anyOf variant 1: Number of deliveries the plan makes..

- Value shape: integer. Number of deliveries the plan makes. 

### DeliveryPlanPreviousAttributesInput.planned_delivery_count variant 2

anyOf variant 2.

- Value shape: null. Number of deliveries the plan makes. 

### DeliveryPlanPreviousAttributesInput.type

### DeliveryPlanPreviousAttributesInput.type variant 1

anyOf variant 1: Whether the items arrive together..

- Value shape: string. Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`.

### DeliveryPlanPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Whether the items arrive together. 

