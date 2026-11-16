[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBlackoutIntervalPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_local` | Optional | string or null | Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. `end_local`: [declared alternatives](../models/DeliveryBlackoutIntervalPreviousAttributesInput.md#deliveryblackoutintervalpreviousattributesinputend_local). |
| `start_local` | Optional | string or null | Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. `start_local`: [declared alternatives](../models/DeliveryBlackoutIntervalPreviousAttributesInput.md#deliveryblackoutintervalpreviousattributesinputstart_local). |

### DeliveryBlackoutIntervalPreviousAttributesInput.end_local

### DeliveryBlackoutIntervalPreviousAttributesInput.end_local variant 1

anyOf variant 1: Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone..

- Value shape: string. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: `1`. 

### DeliveryBlackoutIntervalPreviousAttributesInput.end_local variant 2

anyOf variant 2.

- Value shape: null. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. 

### DeliveryBlackoutIntervalPreviousAttributesInput.start_local

### DeliveryBlackoutIntervalPreviousAttributesInput.start_local variant 1

anyOf variant 1: Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone..

- Value shape: string. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: `1`. 

### DeliveryBlackoutIntervalPreviousAttributesInput.start_local variant 2

anyOf variant 2.

- Value shape: null. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. 

