[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSummaryResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Street address of the Location. |
| `instructions` | Optional | string or null | Buyer-visible pickup instructions for the Location. `instructions`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributesInput.md#deliverylocationsummaryresourcepreviousattributesinputinstructions). |
| `location_id` | Optional | string or null | ID of the Location buyers can collect from. `location_id`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributesInput.md#deliverylocationsummaryresourcepreviousattributesinputlocation_id). |
| `name` | Optional | string or null | Name of the Location, as buyers see it when choosing pickup. `name`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributesInput.md#deliverylocationsummaryresourcepreviousattributesinputname). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinputtimezone). |

### DeliveryLocationSummaryResourcePreviousAttributesInput.instructions

### DeliveryLocationSummaryResourcePreviousAttributesInput.instructions variant 1

anyOf variant 1: Buyer-visible pickup instructions for the Location..

- Value shape: string. Buyer-visible pickup instructions for the Location. 

### DeliveryLocationSummaryResourcePreviousAttributesInput.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible pickup instructions for the Location. 

### DeliveryLocationSummaryResourcePreviousAttributesInput.location_id

### DeliveryLocationSummaryResourcePreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the Location buyers can collect from..

- Value shape: string. ID of the Location buyers can collect from. ID of the Location buyers can collect from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryLocationSummaryResourcePreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location buyers can collect from. 

### DeliveryLocationSummaryResourcePreviousAttributesInput.name

### DeliveryLocationSummaryResourcePreviousAttributesInput.name variant 1

anyOf variant 1: Name of the Location, as buyers see it when choosing pickup..

- Value shape: string. Name of the Location, as buyers see it when choosing pickup. 

### DeliveryLocationSummaryResourcePreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the Location, as buyers see it when choosing pickup. 

### DeliveryLocationSummaryResourcePreviousAttributesInput.timezone

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributesInput.timezone](../models/DeliveryArrivalEstimatePreviousAttributesInput.md#deliveryarrivalestimatepreviousattributesinputtimezone).

