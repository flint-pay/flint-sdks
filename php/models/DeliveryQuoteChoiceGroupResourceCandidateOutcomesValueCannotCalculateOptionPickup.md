[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation.md#deliveryquotechoicegroupresourcecandidateoutcomesvaluecannotcalculateoptionpickuplocation) | A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvaluecannotcalculateoptionpickuplocation-fields-1). |
| `pickup_mode` | Required | string | Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup.location fields 1

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Field definitions: [shared fields](DeliveryLocationSummaryResource.md#deliverylocationsummaryresource).

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup.location fields 1.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

