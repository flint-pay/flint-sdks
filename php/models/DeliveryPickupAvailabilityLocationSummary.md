[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationSummary

The ID, name, and address of a pickup location in a pickup locations preview.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Street address of the Location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1address). |
| `location_id` | Required | string | ID of the Location buyers can collect from. |
| `name` | Required | string | Name of the Location, as buyers see it when choosing pickup. |

### DeliveryPickupAvailabilityLocationSummary.address

Field definitions: [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.location fields 1.address](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1address).

