[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `address`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributessuggested_address). |
| `address_source` | Optional | string or null | Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`. `address_source`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesaddress_source). |
| `address_type` | Optional | string or null | The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. `address_type`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesaddress_type). |
| `customer_id` | Optional | string or null | ID of the customer whose saved address Flint used, when `address_source` is `customer`. `customer_id`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributescustomer_id). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. `fulfillment_id`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesfulfillment_id). |
| `location_id` | Optional | string or null | ID of the pickup store whose address Flint used, when `address_source` is `location`. `location_id`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributeslocation_id). |

### OrderTaxLocationPreviousAttributes.address

Declared alternatives: [DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributessuggested_address).

### OrderTaxLocationPreviousAttributes.address_source

### OrderTaxLocationPreviousAttributes.address_source variant 1

anyOf variant 1: Where the tax address came from..

- Value shape: string. Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`.

### OrderTaxLocationPreviousAttributes.address_source variant 2

anyOf variant 2.

- Value shape: null. Where the tax address came from. 

### OrderTaxLocationPreviousAttributes.address_type

### OrderTaxLocationPreviousAttributes.address_type variant 1

anyOf variant 1: The kind of address Flint used to calculate tax..

- Value shape: string. The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`.

### OrderTaxLocationPreviousAttributes.address_type variant 2

anyOf variant 2.

- Value shape: null. The kind of address Flint used to calculate tax. 

### OrderTaxLocationPreviousAttributes.customer_id

### OrderTaxLocationPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer whose saved address Flint used, when `address_source` is `customer`..

- Value shape: string. ID of the customer whose saved address Flint used, when `address_source` is `customer`. 

### OrderTaxLocationPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer whose saved address Flint used, when `address_source` is `customer`. 

### OrderTaxLocationPreviousAttributes.fulfillment_id

### OrderTaxLocationPreviousAttributes.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`..

- Value shape: string. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. 

### OrderTaxLocationPreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. 

### OrderTaxLocationPreviousAttributes.location_id

### OrderTaxLocationPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the pickup store whose address Flint used, when `address_source` is `location`..

- Value shape: string. ID of the pickup store whose address Flint used, when `address_source` is `location`. 

### OrderTaxLocationPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pickup store whose address Flint used, when `address_source` is `location`. 

