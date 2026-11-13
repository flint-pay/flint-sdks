[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupDetails

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryLocationSummaryResource](../models/DeliveryLocationSummaryResource.md#deliverylocationsummaryresource) | Location where the buyer collects the items. A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickup-fields-1location). |
| `pickup_mode` | Required | string | How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryPickupDetails.location

Field definitions: [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.pickup fields 1.location](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOption.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickup-fields-1location).

