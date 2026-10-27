[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocationAddress](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocationAddress.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueunavailableoptionpickuplocationaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueunavailableoptionpickuplocationaddress-fields-1). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

