[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputPostalCodeInput

The `postal_code` variant of `OrderTaxLocationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationPostalAddressRequestInput](../models/OrderTaxLocationPostalAddressRequestInput.md#ordertaxlocationpostaladdressrequestinput) | The address to calculate tax from. A postal code, with an optional country, you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Required | string | The kind of address you are sending. Values: `"postal_code"`. |

