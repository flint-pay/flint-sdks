[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemRequestInput

A replacement item to include in a return resolution, from a variant, a bundle, or a custom name and price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | ID of the bundle to send. Used when `type` is `bundle`. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the replacement item. minLength: `1`. |
| `fulfillment` | Conditional | [LineItemFulfillmentRequestModelInput](../models/LineItemFulfillmentRequestModelInput.md#lineitemfulfillmentrequestmodelinput) | Fulfillment requirements for custom replacement merchandise, using the same input as an order line. Required for custom lines; catalog lines use their catalog fulfillment profile. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `name` | Conditional | string | Name of the replacement item. Required when `type` is `custom`. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `sku` | Optional | string | SKU of the replacement item. minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | ID of the variant to send. Used when `type` is `variant`. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### ReturnReplacementLineItemRequestInput variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `ReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`.
- Constraints for `type`: Values: `"variant"`.

### ReturnReplacementLineItemRequestInput variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `ReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`fulfillment`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### ReturnReplacementLineItemRequestInput variant 3: `type` = `"custom"`

oneOf with type: "custom": The `custom` variant of `ReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `fulfillment`, `name`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

