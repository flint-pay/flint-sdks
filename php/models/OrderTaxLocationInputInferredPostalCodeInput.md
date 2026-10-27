[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputInferredPostalCodeInput

A postal-code tax location where Flint infers the address type.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationPostalAddressRequestInput](../models/OrderTaxLocationPostalAddressRequestInput.md#ordertaxlocationpostaladdressrequestinput) | A postal code, with an optional country, you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |

