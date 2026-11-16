[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `address_source` | Optional | string or null | Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`. `address_source`: [declared alternatives](../models/OrderTaxLocationPreviousAttributesInput.md#ordertaxlocationpreviousattributesinputaddress_source). |
| `address_type` | Optional | string or null | The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. `address_type`: [declared alternatives](../models/OrderTaxLocationPreviousAttributesInput.md#ordertaxlocationpreviousattributesinputaddress_type). |
| `customer_id` | Optional | string or null | ID of the customer whose saved address Flint used, when `address_source` is `customer`. `customer_id`: [declared alternatives](../models/OrderTaxLocationPreviousAttributesInput.md#ordertaxlocationpreviousattributesinputcustomer_id). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. `fulfillment_id`: [declared alternatives](../models/OrderTaxLocationPreviousAttributesInput.md#ordertaxlocationpreviousattributesinputfulfillment_id). |
| `location_id` | Optional | string or null | ID of the pickup store whose address Flint used, when `address_source` is `location`. `location_id`: [declared alternatives](../models/OrderTaxLocationPreviousAttributesInput.md#ordertaxlocationpreviousattributesinputlocation_id). |

### OrderTaxLocationPreviousAttributesInput.address_source

### OrderTaxLocationPreviousAttributesInput.address_source variant 1

anyOf variant 1: Where the tax address came from..

- Value shape: string. Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`.

### OrderTaxLocationPreviousAttributesInput.address_source variant 2

anyOf variant 2.

- Value shape: null. Where the tax address came from. 

### OrderTaxLocationPreviousAttributesInput.address_type

### OrderTaxLocationPreviousAttributesInput.address_type variant 1

anyOf variant 1: The kind of address Flint used to calculate tax..

- Value shape: string. The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`.

### OrderTaxLocationPreviousAttributesInput.address_type variant 2

anyOf variant 2.

- Value shape: null. The kind of address Flint used to calculate tax. 

### OrderTaxLocationPreviousAttributesInput.customer_id

### OrderTaxLocationPreviousAttributesInput.customer_id variant 1

anyOf variant 1: ID of the customer whose saved address Flint used, when `address_source` is `customer`..

- Value shape: string. ID of the customer whose saved address Flint used, when `address_source` is `customer`. ID of the customer whose saved address Flint used, when `address_source` is `customer`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderTaxLocationPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer whose saved address Flint used, when `address_source` is `customer`. 

### OrderTaxLocationPreviousAttributesInput.fulfillment_id

### OrderTaxLocationPreviousAttributesInput.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`..

- Value shape: string. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### OrderTaxLocationPreviousAttributesInput.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. 

### OrderTaxLocationPreviousAttributesInput.location_id

### OrderTaxLocationPreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the pickup store whose address Flint used, when `address_source` is `location`..

- Value shape: string. ID of the pickup store whose address Flint used, when `address_source` is `location`. ID of the pickup store whose address Flint used, when `address_source` is `location`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### OrderTaxLocationPreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pickup store whose address Flint used, when `address_source` is `location`. 

