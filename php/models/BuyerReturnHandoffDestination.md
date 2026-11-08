[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffDestination

The destination name, address, and type shown to the buyer for returning merchandise.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Postal address the buyer sends the merchandise to. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirementsdestinationaddress). |
| `destination_type` | Required | string | What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`. |
| `name` | Optional | string | Name of the destination. |

### BuyerReturnHandoffDestination.address

Field definitions: [CancelReturnResponse.data.handoff_requirements[].destination.address](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirementsdestinationaddress).

