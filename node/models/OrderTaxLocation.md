[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocation

The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `address_source` | Required | string | Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`. |
| `address_type` | Required | string | The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. |
| `customer_id` | Optional | string | ID of the customer whose saved address Flint used, when `address_source` is `customer`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `fulfillment_id` | Optional | string | ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `location_id` | Optional | string | ID of the pickup store whose address Flint used, when `address_source` is `location`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

