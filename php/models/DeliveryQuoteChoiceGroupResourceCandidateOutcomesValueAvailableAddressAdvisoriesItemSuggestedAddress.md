[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress

Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string | City or locality of the address. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `line1` | Optional | string | Street address, including the building number. |
| `line2` | Optional | string | Apartment, suite, floor, or other address details. |
| `postal_code` | Optional | string | Postal or ZIP code of the address. |
| `state` | Optional | string | State, province, or region of the address. |

