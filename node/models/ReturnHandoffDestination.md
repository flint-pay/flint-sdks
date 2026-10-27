[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffDestination

Where the buyer sends returned merchandise: their own address, a merchant location, or an external location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
| `destination_type` | Required | string | Values: `"buyer_address"`, `"location"`, `"external_location"`. |
| `location_id` | Optional | string |  |
| `name` | Optional | string |  |

### ReturnHandoffDestination.address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

