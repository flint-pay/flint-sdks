[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputInferredPostalCode

A postal-code tax location where Flint infers the address type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationPostalAddressRequest](../models/OrderTaxLocationPostalAddressRequest.md#ordertaxlocationpostaladdressrequest) | A postal code, with an optional country, you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |

