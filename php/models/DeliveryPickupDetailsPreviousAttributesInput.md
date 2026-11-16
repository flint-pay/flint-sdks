[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryLocationSummaryResourcePreviousAttributesInput](../models/DeliveryLocationSummaryResourcePreviousAttributesInput.md#deliverylocationsummaryresourcepreviousattributesinput) or null | Location where the buyer collects the items. |
| `pickup_mode` | Optional | string or null | How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryPickupDetailsPreviousAttributesInput.md#deliverypickupdetailspreviousattributesinputpickup_mode). |

### DeliveryPickupDetailsPreviousAttributesInput.pickup_mode

### DeliveryPickupDetailsPreviousAttributesInput.pickup_mode variant 1

anyOf variant 1: How the buyer collects the items at this Location..

- Value shape: string. How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### DeliveryPickupDetailsPreviousAttributesInput.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. How the buyer collects the items at this Location. 

