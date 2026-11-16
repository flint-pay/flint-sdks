[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ServiceFulfillmentDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | When the service was completed, in RFC3339 format. `completed_at`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributesInput.md#servicefulfillmentdetailspreviousattributesinputcompleted_at). |
| `notes` | Optional | string or null | Additional instructions or notes for performing the service. `notes`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributesInput.md#servicefulfillmentdetailspreviousattributesinputnotes). |
| `scheduled_end_at` | Optional | string or null | Scheduled end of the service, in RFC3339 format. `scheduled_end_at`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributesInput.md#servicefulfillmentdetailspreviousattributesinputscheduled_end_at). |
| `scheduled_start_at` | Optional | string or null | Scheduled start of the service, in RFC3339 format. `scheduled_start_at`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributesInput.md#servicefulfillmentdetailspreviousattributesinputscheduled_start_at). |
| `timezone` | Optional | string or null | Timezone used to display the service appointment. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributesInput.md#servicefulfillmentdetailspreviousattributesinputtimezone). |

### ServiceFulfillmentDetailsPreviousAttributesInput.completed_at

### ServiceFulfillmentDetailsPreviousAttributesInput.completed_at variant 1

anyOf variant 1: When the service was completed, in RFC3339 format..

- Value shape: string. When the service was completed, in RFC3339 format. When the service was completed, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ServiceFulfillmentDetailsPreviousAttributesInput.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the service was completed, in RFC3339 format. 

### ServiceFulfillmentDetailsPreviousAttributesInput.notes

### ServiceFulfillmentDetailsPreviousAttributesInput.notes variant 1

anyOf variant 1: Additional instructions or notes for performing the service..

- Value shape: string. Additional instructions or notes for performing the service. 

### ServiceFulfillmentDetailsPreviousAttributesInput.notes variant 2

anyOf variant 2.

- Value shape: null. Additional instructions or notes for performing the service. 

### ServiceFulfillmentDetailsPreviousAttributesInput.scheduled_end_at

### ServiceFulfillmentDetailsPreviousAttributesInput.scheduled_end_at variant 1

anyOf variant 1: Scheduled end of the service, in RFC3339 format..

- Value shape: string. Scheduled end of the service, in RFC3339 format. Scheduled end of the service, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ServiceFulfillmentDetailsPreviousAttributesInput.scheduled_end_at variant 2

anyOf variant 2.

- Value shape: null. Scheduled end of the service, in RFC3339 format. 

### ServiceFulfillmentDetailsPreviousAttributesInput.scheduled_start_at

### ServiceFulfillmentDetailsPreviousAttributesInput.scheduled_start_at variant 1

anyOf variant 1: Scheduled start of the service, in RFC3339 format..

- Value shape: string. Scheduled start of the service, in RFC3339 format. Scheduled start of the service, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ServiceFulfillmentDetailsPreviousAttributesInput.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Scheduled start of the service, in RFC3339 format. 

### ServiceFulfillmentDetailsPreviousAttributesInput.timezone

### ServiceFulfillmentDetailsPreviousAttributesInput.timezone variant 1

anyOf variant 1: Timezone used to display the service appointment. Uses an IANA time zone name..

- Value shape: string. Timezone used to display the service appointment. Uses an IANA time zone name. 

### ServiceFulfillmentDetailsPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. Timezone used to display the service appointment. Uses an IANA time zone name. 

