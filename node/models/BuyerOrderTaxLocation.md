[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderTaxLocation

The location used to calculate tax on a buyer's order, and where its address came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/BuyerOrderTaxLocation.md#buyerordertaxlocationaddress). |
| `address_source` | Required | string | Values: `"provided"`, `"fulfillment"`, `"customer"`, `"device"`, `"location"`, `"merchant"`. |
| `address_type` | Optional | string | Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. |
| `customer_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |

### BuyerOrderTaxLocation.address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Field definitions: [shared fields](BuyerCustomer.md#buyercustomerbilling_address).

