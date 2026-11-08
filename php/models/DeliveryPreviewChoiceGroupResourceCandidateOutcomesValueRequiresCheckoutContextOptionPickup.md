[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionPickup

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionPickupLocation](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionPickupLocation.md#deliverypreviewchoicegroupresourcecandidateoutcomesvaluerequirescheckoutcontextoptionpickuplocation) | A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionPickup.md#deliverypreviewchoicegroupresourcecandidateoutcomesvaluerequirescheckoutcontextoptionpickuplocation-fields-1). |
| `pickup_mode` | Required | string | Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionPickup.location fields 1

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Field definitions: [shared fields](DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1).

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionPickup.location fields 1.address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

