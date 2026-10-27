[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationRequest

The tax location you supply for an order, as a postal code or a full address, with or without an address type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | Varies by condition |  |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Conditional | string |  |

### OrderTaxLocationRequest variant 1: `address_source` = `"provided"`, `address_type` = `"postal_code"`

oneOf variant 1: A postal-code tax location with an explicit address type of `postal_code`..

- Required: `address_type`.
- Constraints for `address`: [OrderTaxLocationPostalAddressRequest](../models/OrderTaxLocationPostalAddressRequest.md#ordertaxlocationpostaladdressrequest).
- Constraints for `address_type`: Values: `"postal_code"`.

### OrderTaxLocationRequest variant 2: `address_source` = `"provided"`

oneOf variant 2: A full-address tax location with an explicit address type of tax, billing, or shipping address..

- Required: `address_type`.
- Constraints for `address`: [OrderTaxLocationFullAddressRequest](../models/OrderTaxLocationFullAddressRequest.md#ordertaxlocationfulladdressrequest).
- Constraints for `address_type`: Values: `"tax_address"`, `"billing_address"`, `"shipping_address"`.

### OrderTaxLocationRequest variant 3: `address_source` = `"provided"`

oneOf variant 3: A postal-code tax location where Flint infers the address type..

- Undeclared: `address_type`.
- Constraints for `address`: [OrderTaxLocationPostalAddressRequest](../models/OrderTaxLocationPostalAddressRequest.md#ordertaxlocationpostaladdressrequest).

### OrderTaxLocationRequest variant 4: `address_source` = `"provided"`

oneOf variant 4: A full-address tax location where Flint infers the address type..

- Undeclared: `address_type`.
- Constraints for `address`: [OrderTaxLocationFullAddressRequest](../models/OrderTaxLocationFullAddressRequest.md#ordertaxlocationfulladdressrequest).

