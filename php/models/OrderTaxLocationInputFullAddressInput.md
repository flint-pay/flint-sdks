[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationInputFullAddressInput

A full-address tax location with an explicit address type of tax, billing, or shipping address.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderTaxLocationFullAddressRequestInput](../models/OrderTaxLocationFullAddressRequestInput.md#ordertaxlocationfulladdressrequestinput) | A full street address you supply as an order's tax location. |
| `address_source` | Optional | string | Where the tax address comes from. The only accepted value is provided, which is the default. Default: `"provided"`. Values: `"provided"`. |
| `address_type` | Required | string | Values: `"tax_address"`, `"billing_address"`, `"shipping_address"`. |

