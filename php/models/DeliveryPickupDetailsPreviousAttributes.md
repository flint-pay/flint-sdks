[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupDetailsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryLocationSummaryResourcePreviousAttributes](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributes) or null | Location where the buyer collects the items. `location`: [declared alternatives](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributeslocation). |
| `pickup_mode` | Optional | string or null | How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributespickup_mode). |

### DeliveryPickupDetailsPreviousAttributes.location

Location where the buyer collects the items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Street address of the Location. `address`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesaddress). |
| `instructions` | Conditional | string or null | Buyer-visible pickup instructions for the Location. `instructions`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesinstructions). |
| `location_id` | Conditional | string or null | ID of the Location buyers can collect from. `location_id`: [declared alternatives](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributeslocation-variant-1location_id). |
| `name` | Conditional | string or null | Name of the Location, as buyers see it when choosing pickup. `name`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesname). |
| `timezone` | Conditional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone). |

### DeliveryPickupDetailsPreviousAttributes.location variant 1

anyOf DeliveryLocationSummaryResourcePreviousAttributes.

- Optional: `address`, `instructions`, `location_id`, `name`, `timezone`.

### DeliveryPickupDetailsPreviousAttributes.location variant 2

anyOf variant 2.

- Undeclared: `address`, `instructions`, `location_id`, `name`, `timezone`.
- Value shape: null. Location where the buyer collects the items. 

### DeliveryPickupDetailsPreviousAttributes.location variant 1.address

Declared alternatives: [DeliveryLocationSummaryResourcePreviousAttributes.address](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesaddress).

### DeliveryPickupDetailsPreviousAttributes.location variant 1.instructions

Declared alternatives: [DeliveryLocationSummaryResourcePreviousAttributes.instructions](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesinstructions).

### DeliveryPickupDetailsPreviousAttributes.location variant 1.location_id

### DeliveryPickupDetailsPreviousAttributes.location variant 1.location_id variant 1

anyOf variant 1: ID of the Location buyers can collect from..

- Value shape: string. ID of the Location buyers can collect from. ID of the Location buyers can collect from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryPickupDetailsPreviousAttributes.location variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location buyers can collect from. 

### DeliveryPickupDetailsPreviousAttributes.location variant 1.name

Declared alternatives: [DeliveryLocationSummaryResourcePreviousAttributes.name](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesname).

### DeliveryPickupDetailsPreviousAttributes.location variant 1.timezone

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributes.timezone](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone).

### DeliveryPickupDetailsPreviousAttributes.pickup_mode

### DeliveryPickupDetailsPreviousAttributes.pickup_mode variant 1

anyOf variant 1: How the buyer collects the items at this Location..

- Value shape: string. How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### DeliveryPickupDetailsPreviousAttributes.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. How the buyer collects the items at this Location. 

