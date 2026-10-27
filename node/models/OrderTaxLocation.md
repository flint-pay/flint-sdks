[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocation

The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/BuyerOrderTaxLocation.md#buyerordertaxlocationaddress). |
| `address_source` | Required | string | Values: `"provided"`, `"fulfillment"`, `"customer"`, `"device"`, `"location"`, `"merchant"`. |
| `address_type` | Optional | string | Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. |
| `customer_id` | Optional | string |  |
| `device_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `location_id` | Optional | string |  |

### OrderTaxLocation.address

Field definitions: [BuyerOrderTaxLocation.address](../models/BuyerOrderTaxLocation.md#buyerordertaxlocationaddress).

