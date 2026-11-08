[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkProductOption

An active product option offered on a payment link, with values used by its available variants.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Product option name, such as Size or Color. |
| `option_id` | Required | string | ID of the product option. |
| `values` | Required | Array of [PaymentLinkProductOptionValue](../models/PaymentLinkProductOptionValue.md#paymentlinkproductoptionvalue) | Values used by at least one available variant, in product option value position order. `values[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_optionsvalues). |

### PaymentLinkProductOption.values[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].product_options[].values[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_optionsvalues).

