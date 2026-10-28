[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationRequest

The tax location you supply for an order, as a postal code or a full address, with or without an address type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | Varies by condition |  |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Required | string |  |

### OrderTaxLocationRequest variant 1: `address_source` = `"provided"`, `address_type` = `"postal_code"`

oneOf variant 1: The `postal_code` variant of `OrderTaxLocationInput`..

- Constraints for `address`: [OrderTaxLocationPostalAddressRequest](../models/OrderTaxLocationPostalAddressRequest.md#ordertaxlocationpostaladdressrequest).
- Constraints for `address_type`: Values: `"postal_code"`.

### OrderTaxLocationRequest variant 2: `address_source` = `"provided"`

oneOf variant 2: The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`..

- Constraints for `address`: [OrderTaxLocationFullAddressRequest](../models/OrderTaxLocationFullAddressRequest.md#ordertaxlocationfulladdressrequest).
- Constraints for `address_type`: Values: `"tax_address"`, `"billing_address"`, `"shipping_address"`.

