[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkProductOption

An active product option offered on a payment link, with values used by its available variants.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Product option name, such as Size or Color. |
| `option_id` | Required | string | ID of the product option. |
| `values` | Required | Array of [PaymentLinkProductOptionValue](../models/PaymentLinkProductOptionValue.md#paymentlinkproductoptionvalue) | Values used by at least one available variant, in product option value position order. |

