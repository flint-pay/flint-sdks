[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocationaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocationaddress-fields-1). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

