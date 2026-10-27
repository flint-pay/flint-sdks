[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffDestinationInput

Where the buyer sends returned merchandise: their own address, a merchant location, or an external location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `destination_type` | Required | string | Values: `"buyer_address"`, `"location"`, `"external_location"`. |
| `location_id` | Optional | string |  |
| `name` | Optional | string |  |

