[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedModifierGroupInput

A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean |  |
| `max_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `max_selected` | Optional | integer | Format: `int32`. |
| `max_total_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `min_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `min_selected` | Optional | integer | Format: `int32`. |
| `modifier_group_id` | Required | string |  |
| `modifier_group_type` | Required | string | Values: `"list"`, `"text"`. |
| `name` | Required | string |  |
| `options` | Optional | Array of [PublicResolvedModifierOptionInput](../models/PublicResolvedModifierOptionInput.md#publicresolvedmodifieroptioninput) |  |
| `position` | Optional | integer | Format: `int32`. |
| `pricing_scope` | Optional | string | Values: `"per_item"`, `"per_line"`. |
| `show_on_fulfillment` | Optional | boolean |  |
| `show_on_receipt` | Optional | boolean |  |
| `text` | Optional | [PublicResolvedTextModifierInput](../models/PublicResolvedTextModifierInput.md#publicresolvedtextmodifierinput) | Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits. |

