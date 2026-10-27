[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocationAddress](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocationAddress.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueinputrequiredoptionpickuplocationaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueinputrequiredoptionpickuplocationaddress-fields-1). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

