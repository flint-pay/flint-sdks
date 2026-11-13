[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup

Pickup details. Set only when `type` is `pickup`.

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickupLocation.md#deliveryquotechoicegroupresourcecandidateoutcomesvaluecannotcalculateoptionpickuplocation) | Location where the buyer collects the items. A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvaluecannotcalculateoptionpickuplocation-fields-1). |
| `pickup_mode` | Required | string | How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup.location fields 1

Location where the buyer collects the items. A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Field definitions: [shared fields](DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1).

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionPickup.location fields 1.address

Field definitions: [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.location fields 1.address](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1address).

