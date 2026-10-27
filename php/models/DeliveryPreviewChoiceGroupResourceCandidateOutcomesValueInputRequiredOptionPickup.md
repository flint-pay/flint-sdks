[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickup

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueinputrequiredoptionpickuplocation) | A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickup.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueinputrequiredoptionpickuplocation-fields-1). |
| `pickup_mode` | Required | string | Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickup.location fields 1

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Field definitions: [shared fields](DeliveryLocationSummaryResource.md#deliverylocationsummaryresource).

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickup.location fields 1.address

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.buyer_location.address](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationaddress).

