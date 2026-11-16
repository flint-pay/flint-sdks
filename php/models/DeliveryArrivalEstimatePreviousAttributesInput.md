[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryArrivalEstimatePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_date` | Optional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `earliest_date`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinputearliest_date). |
| `latest_date` | Optional | string or null | Calendar date in the option timezone. Do not parse it as a UTC timestamp. `latest_date`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinputearliest_date). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinputtimezone). |

### DeliveryArrivalEstimatePreviousAttributesInput.earliest_date

### DeliveryArrivalEstimatePreviousAttributesInput.earliest_date variant 1

anyOf variant 1: Calendar date in the option timezone. Do not parse it as a UTC timestamp..

- Value shape: string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. Example: `"2026-08-02"`. 

### DeliveryArrivalEstimatePreviousAttributesInput.earliest_date variant 2

anyOf variant 2.

- Value shape: null. Calendar date in the option timezone. Do not parse it as a UTC timestamp. 

### DeliveryArrivalEstimatePreviousAttributesInput.latest_date

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributesInput.earliest_date](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinputearliest_date).

### DeliveryArrivalEstimatePreviousAttributesInput.timezone

### DeliveryArrivalEstimatePreviousAttributesInput.timezone variant 1

anyOf variant 1: Uses an IANA time zone name..

- Value shape: string. Uses an IANA time zone name. 

### DeliveryArrivalEstimatePreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. Uses an IANA time zone name. 

