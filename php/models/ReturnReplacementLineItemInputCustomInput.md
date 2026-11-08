[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemInputCustomInput

The `custom` variant of `ReturnReplacementLineItemInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | ID of the bundle to send. Used when `type` is `bundle`. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the replacement item. minLength: `1`. |
| `fulfillment` | Required | [LineItemFulfillmentRequestModelInput](../models/LineItemFulfillmentRequestModelInput.md#lineitemfulfillmentrequestmodelinput) | Fulfillment requirements for custom replacement merchandise, using the same input as an order line. Required for custom lines; catalog lines use their catalog fulfillment profile. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `name` | Required | string | Name of the replacement item. Required when `type` is `custom`. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `sku` | Optional | string | SKU of the replacement item. minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"custom"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | ID of the variant to send. Used when `type` is `variant`. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

