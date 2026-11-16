[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentHoldPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | Time the hold became active. `created_at`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributescreated_at). |
| `display_reason` | Optional | string or null | Explanation of the hold suitable for display to the merchant. `display_reason`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesdisplay_reason). |
| `held_by` | Optional | string or null | Actor that placed the fulfillment on hold. `held_by`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesheld_by). |
| `initiated_by` | Optional | string or null | Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesinitiated_by). |
| `previous_status` | Optional | string or null | Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Values: `"pending"`, `"accepted"`, `"in_progress"`, `"ready"`, `"scheduled"`, `"preparing"`, `"picked"`, `"packed"`, `"dispatched"`. `previous_status`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesprevious_status). |
| `reason` | Optional | string or null | Machine-readable reason fulfillment work is paused. Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`. `reason`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesreason). |
| `reason_notes` | Optional | string or null | Additional notes explaining the hold. `reason_notes`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesreason_notes). |

### FulfillmentHoldPreviousAttributes.created_at

### FulfillmentHoldPreviousAttributes.created_at variant 1

anyOf variant 1: Time the hold became active..

- Value shape: string. Time the hold became active. Time the hold became active. Format: `date-time`. 

### FulfillmentHoldPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the hold became active. 

### FulfillmentHoldPreviousAttributes.display_reason

### FulfillmentHoldPreviousAttributes.display_reason variant 1

anyOf variant 1: Explanation of the hold suitable for display to the merchant..

- Value shape: string. Explanation of the hold suitable for display to the merchant. 

### FulfillmentHoldPreviousAttributes.display_reason variant 2

anyOf variant 2.

- Value shape: null. Explanation of the hold suitable for display to the merchant. 

### FulfillmentHoldPreviousAttributes.held_by

### FulfillmentHoldPreviousAttributes.held_by variant 1

anyOf variant 1: Actor that placed the fulfillment on hold..

- Value shape: string. Actor that placed the fulfillment on hold. 

### FulfillmentHoldPreviousAttributes.held_by variant 2

anyOf variant 2.

- Value shape: null. Actor that placed the fulfillment on hold. 

### FulfillmentHoldPreviousAttributes.initiated_by

### FulfillmentHoldPreviousAttributes.initiated_by variant 1

anyOf variant 1: Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold..

- Value shape: string. Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Values: `"merchant"`, `"flint"`.

### FulfillmentHoldPreviousAttributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. 

### FulfillmentHoldPreviousAttributes.previous_status

### FulfillmentHoldPreviousAttributes.previous_status variant 1

anyOf variant 1: Status before this hold. Never on_hold or terminal. The release_hold action restores this status..

- Value shape: string. Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Values: `"pending"`, `"accepted"`, `"in_progress"`, `"ready"`, `"scheduled"`, `"preparing"`, `"picked"`, `"packed"`, `"dispatched"`.

### FulfillmentHoldPreviousAttributes.previous_status variant 2

anyOf variant 2.

- Value shape: null. Status before this hold. Never on_hold or terminal. The release_hold action restores this status. 

### FulfillmentHoldPreviousAttributes.reason

### FulfillmentHoldPreviousAttributes.reason variant 1

anyOf variant 1: Machine-readable reason fulfillment work is paused..

- Value shape: string. Machine-readable reason fulfillment work is paused. Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`.

### FulfillmentHoldPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Machine-readable reason fulfillment work is paused. 

### FulfillmentHoldPreviousAttributes.reason_notes

### FulfillmentHoldPreviousAttributes.reason_notes variant 1

anyOf variant 1: Additional notes explaining the hold..

- Value shape: string. Additional notes explaining the hold. 

### FulfillmentHoldPreviousAttributes.reason_notes variant 2

anyOf variant 2.

- Value shape: null. Additional notes explaining the hold. 

