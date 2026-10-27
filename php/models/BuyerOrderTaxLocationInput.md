[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderTaxLocationInput

The location used to calculate tax on a buyer's order, and where its address came from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `address_source` | Required | string | Values: `"provided"`, `"fulfillment"`, `"customer"`, `"device"`, `"location"`, `"merchant"`. |
| `address_type` | Optional | string | Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. |
| `customer_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |

