[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationRequestInput

The tax location you supply for an order, as a postal code or a full address, with or without an address type.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | Varies by condition |  |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Required | string |  |

### OrderTaxLocationRequestInput variant 1: `address_source` = `"provided"`, `address_type` = `"postal_code"`

oneOf with address_type: "postal_code": The `postal_code` variant of `OrderTaxLocationInput`..

- Constraints for `address`: [OrderTaxLocationPostalAddressRequestInput](../models/OrderTaxLocationPostalAddressRequestInput.md#ordertaxlocationpostaladdressrequestinput).
- Constraints for `address_type`: Values: `"postal_code"`.

### OrderTaxLocationRequestInput variant 2: `address_source` = `"provided"`

oneOf with address_type: "billing_address" | "shipping_address" | "tax_address": The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`..

- Constraints for `address`: [OrderTaxLocationFullAddressRequestInput](../models/OrderTaxLocationFullAddressRequestInput.md#ordertaxlocationfulladdressrequestinput).
- Constraints for `address_type`: Values: `"tax_address"`, `"billing_address"`, `"shipping_address"`.

