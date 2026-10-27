[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocationAddress](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocationAddress.md#deliverypreviewchoicegroupresourcecandidateoutcomesvaluecannotcalculateoptionpickuplocationaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvaluecannotcalculateoptionpickuplocationaddress-fields-1). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

