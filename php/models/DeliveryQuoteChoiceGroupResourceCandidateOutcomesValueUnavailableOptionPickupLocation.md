[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocationAddress](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocationAddress.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionpickuplocationaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableoptionpickuplocationaddress-fields-1). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableOptionPickupLocation.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

