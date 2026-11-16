[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ServiceFulfillmentDetailsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | When the service was completed, in RFC3339 format. `completed_at`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributescompleted_at). |
| `notes` | Optional | string or null | Additional instructions or notes for performing the service. `notes`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributesnotes). |
| `scheduled_end_at` | Optional | string or null | Scheduled end of the service, in RFC3339 format. `scheduled_end_at`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributesscheduled_end_at). |
| `scheduled_start_at` | Optional | string or null | Scheduled start of the service, in RFC3339 format. `scheduled_start_at`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributesscheduled_start_at). |
| `timezone` | Optional | string or null | Timezone used to display the service appointment. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributestimezone). |

### ServiceFulfillmentDetailsPreviousAttributes.completed_at

### ServiceFulfillmentDetailsPreviousAttributes.completed_at variant 1

anyOf variant 1: When the service was completed, in RFC3339 format..

- Value shape: string. When the service was completed, in RFC3339 format. When the service was completed, in RFC3339 format. Format: `date-time`. 

### ServiceFulfillmentDetailsPreviousAttributes.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the service was completed, in RFC3339 format. 

### ServiceFulfillmentDetailsPreviousAttributes.notes

### ServiceFulfillmentDetailsPreviousAttributes.notes variant 1

anyOf variant 1: Additional instructions or notes for performing the service..

- Value shape: string. Additional instructions or notes for performing the service. 

### ServiceFulfillmentDetailsPreviousAttributes.notes variant 2

anyOf variant 2.

- Value shape: null. Additional instructions or notes for performing the service. 

### ServiceFulfillmentDetailsPreviousAttributes.scheduled_end_at

### ServiceFulfillmentDetailsPreviousAttributes.scheduled_end_at variant 1

anyOf variant 1: Scheduled end of the service, in RFC3339 format..

- Value shape: string. Scheduled end of the service, in RFC3339 format. Scheduled end of the service, in RFC3339 format. Format: `date-time`. 

### ServiceFulfillmentDetailsPreviousAttributes.scheduled_end_at variant 2

anyOf variant 2.

- Value shape: null. Scheduled end of the service, in RFC3339 format. 

### ServiceFulfillmentDetailsPreviousAttributes.scheduled_start_at

### ServiceFulfillmentDetailsPreviousAttributes.scheduled_start_at variant 1

anyOf variant 1: Scheduled start of the service, in RFC3339 format..

- Value shape: string. Scheduled start of the service, in RFC3339 format. Scheduled start of the service, in RFC3339 format. Format: `date-time`. 

### ServiceFulfillmentDetailsPreviousAttributes.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Scheduled start of the service, in RFC3339 format. 

### ServiceFulfillmentDetailsPreviousAttributes.timezone

### ServiceFulfillmentDetailsPreviousAttributes.timezone variant 1

anyOf variant 1: Timezone used to display the service appointment. Uses an IANA time zone name..

- Value shape: string. Timezone used to display the service appointment. Uses an IANA time zone name. 

### ServiceFulfillmentDetailsPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Timezone used to display the service appointment. Uses an IANA time zone name. 

