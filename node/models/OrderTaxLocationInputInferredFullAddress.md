[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputInferredFullAddress

A full-address tax location where Flint infers the address type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationFullAddressRequest](../models/OrderTaxLocationFullAddressRequest.md#ordertaxlocationfulladdressrequest) | A full street address you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |

