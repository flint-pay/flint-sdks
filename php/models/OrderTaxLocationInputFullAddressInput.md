[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputFullAddressInput

The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationFullAddressRequestInput](../models/OrderTaxLocationFullAddressRequestInput.md#ordertaxlocationfulladdressrequestinput) | The address to calculate tax from. A full street address you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Required | string | The kind of address you are sending. Values: `"tax_address"`, `"billing_address"`, `"shipping_address"`. |

