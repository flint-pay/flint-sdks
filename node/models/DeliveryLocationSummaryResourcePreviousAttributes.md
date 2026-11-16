[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSummaryResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Street address of the Location. |
| `instructions` | Optional | string or null | Buyer-visible pickup instructions for the Location. `instructions`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesinstructions). |
| `location_id` | Optional | string or null | ID of the Location buyers can collect from. `location_id`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributeslocation_id). |
| `name` | Optional | string or null | Name of the Location, as buyers see it when choosing pickup. `name`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesname). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone). |

### DeliveryLocationSummaryResourcePreviousAttributes.instructions

### DeliveryLocationSummaryResourcePreviousAttributes.instructions variant 1

anyOf variant 1: Buyer-visible pickup instructions for the Location..

- Value shape: string. Buyer-visible pickup instructions for the Location. 

### DeliveryLocationSummaryResourcePreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible pickup instructions for the Location. 

### DeliveryLocationSummaryResourcePreviousAttributes.location_id

### DeliveryLocationSummaryResourcePreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location buyers can collect from..

- Value shape: string. ID of the Location buyers can collect from. ID of the Location buyers can collect from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryLocationSummaryResourcePreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location buyers can collect from. 

### DeliveryLocationSummaryResourcePreviousAttributes.name

### DeliveryLocationSummaryResourcePreviousAttributes.name variant 1

anyOf variant 1: Name of the Location, as buyers see it when choosing pickup..

- Value shape: string. Name of the Location, as buyers see it when choosing pickup. 

### DeliveryLocationSummaryResourcePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the Location, as buyers see it when choosing pickup. 

### DeliveryLocationSummaryResourcePreviousAttributes.timezone

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributes.timezone](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone).

