[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation

Location where the buyer collects the items.

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocationaddress) | Street address of the Location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocationaddress-fields-1). |
| `instructions` | Optional | string | Buyer-visible pickup instructions for the Location. |
| `location_id` | Required | string | ID of the Location buyers can collect from. |
| `name` | Required | string | Name of the Location, as buyers see it when choosing pickup. |
| `timezone` | Optional | string | Uses an IANA time zone name. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation.address fields 1

Street address of the Location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

