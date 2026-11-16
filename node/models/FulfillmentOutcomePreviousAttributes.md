[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentOutcomePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `notes` | Optional | string or null | Additional notes about the fulfillment outcome. `notes`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesnotes). |
| `occurred_at` | Optional | string or null | Time the terminal outcome occurred. `occurred_at`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesoccurred_at). |
| `outcome_type` | Optional | string or null | Recorded fulfillment outcome, such as a missed service appointment. Values: `"no_show"`. `outcome_type`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesoutcome_type). |
| `reason` | Optional | string or null | Machine-readable reason for the recorded outcome. Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`. `reason`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesreason). |

### FulfillmentOutcomePreviousAttributes.notes

### FulfillmentOutcomePreviousAttributes.notes variant 1

anyOf variant 1: Additional notes about the fulfillment outcome..

- Value shape: string. Additional notes about the fulfillment outcome. 

### FulfillmentOutcomePreviousAttributes.notes variant 2

anyOf variant 2.

- Value shape: null. Additional notes about the fulfillment outcome. 

### FulfillmentOutcomePreviousAttributes.occurred_at

### FulfillmentOutcomePreviousAttributes.occurred_at variant 1

anyOf variant 1: Time the terminal outcome occurred..

- Value shape: string. Time the terminal outcome occurred. Time the terminal outcome occurred. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentOutcomePreviousAttributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. Time the terminal outcome occurred. 

### FulfillmentOutcomePreviousAttributes.outcome_type

### FulfillmentOutcomePreviousAttributes.outcome_type variant 1

anyOf variant 1: Recorded fulfillment outcome, such as a missed service appointment..

- Value shape: string. Recorded fulfillment outcome, such as a missed service appointment. Values: `"no_show"`.

### FulfillmentOutcomePreviousAttributes.outcome_type variant 2

anyOf variant 2.

- Value shape: null. Recorded fulfillment outcome, such as a missed service appointment. 

### FulfillmentOutcomePreviousAttributes.reason

### FulfillmentOutcomePreviousAttributes.reason variant 1

anyOf variant 1: Machine-readable reason for the recorded outcome..

- Value shape: string. Machine-readable reason for the recorded outcome. Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`.

### FulfillmentOutcomePreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Machine-readable reason for the recorded outcome. 

