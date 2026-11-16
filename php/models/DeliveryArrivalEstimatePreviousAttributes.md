[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryArrivalEstimatePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_date` | Optional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `earliest_date`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributesearliest_date). |
| `latest_date` | Optional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `latest_date`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributesearliest_date). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone). |

### DeliveryArrivalEstimatePreviousAttributes.earliest_date

### DeliveryArrivalEstimatePreviousAttributes.earliest_date variant 1

anyOf variant 1: Calendar date in the option timezone. Do not parse it as a UTC timestamp..

- Value shape: string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. 

### DeliveryArrivalEstimatePreviousAttributes.earliest_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date in the option timezone. Do not parse it as a UTC timestamp. 

### DeliveryArrivalEstimatePreviousAttributes.latest_date

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributes.earliest_date](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributesearliest_date).

### DeliveryArrivalEstimatePreviousAttributes.timezone

### DeliveryArrivalEstimatePreviousAttributes.timezone variant 1

anyOf variant 1: Uses an IANA time zone name..

- Value shape: string. Uses an IANA time zone name. 

### DeliveryArrivalEstimatePreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Uses an IANA time zone name. 

