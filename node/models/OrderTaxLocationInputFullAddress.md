[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputFullAddress

The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationFullAddressRequest](../models/OrderTaxLocationFullAddressRequest.md#ordertaxlocationfulladdressrequest) | A full street address you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Required | string | Values: `"tax_address"`, `"billing_address"`, `"shipping_address"`. |

