[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffDestinationInput

The destination name, address, and type shown to the buyer for returning merchandise.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `destination_type` | Required | string | Values: `"buyer_address"`, `"location"`, `"external_location"`. |
| `name` | Optional | string |  |

