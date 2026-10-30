[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueunavailableoptionpickuplocation) | A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueunavailableoptionpickuplocation-fields-1). |
| `pickup_mode` | Required | string | Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup.location fields 1

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Field definitions: [shared fields](DeliveryLocationSummaryResource.md#deliverylocationsummaryresource).

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickup.location fields 1.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

