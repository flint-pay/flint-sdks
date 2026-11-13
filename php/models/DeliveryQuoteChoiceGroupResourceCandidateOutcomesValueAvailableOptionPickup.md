[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup

Pickup details. Set only when `type` is `pickup`.

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation) | Location where the buyer collects the items. A pickup location shown on a delivery option: its name, address, instructions, and timezone. `location`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1). |
| `pickup_mode` | Required | string | How the buyer collects the items at this Location. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.location fields 1

Location where the buyer collects the items. A pickup location shown on a delivery option: its name, address, instructions, and timezone.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Street address of the Location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionpickuplocation-fields-1address). |
| `instructions` | Optional | string | Buyer-visible pickup instructions for the Location. |
| `location_id` | Required | string | ID of the Location buyers can collect from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `name` | Required | string | Name of the Location, as buyers see it when choosing pickup. |
| `timezone` | Optional | string | Uses an IANA time zone name. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickup.location fields 1.address

Street address of the Location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

