[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkProductOptionInput

An active product option offered on a payment link, with values used by its available variants.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Product option name, such as Size or Color. |
| `option_id` | Required | string | ID of the product option. |
| `values` | Required | Array of [PaymentLinkProductOptionValueInput](../models/PaymentLinkProductOptionValueInput.md#paymentlinkproductoptionvalueinput) | Values used by at least one available variant, in product option value position order. |

