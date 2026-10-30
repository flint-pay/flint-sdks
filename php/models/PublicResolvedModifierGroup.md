[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedModifierGroup

A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean |  |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer | Format: `int32`. |
| `max_total_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer | Format: `int32`. |
| `modifier_group_id` | Required | string |  |
| `modifier_group_type` | Required | string | Values: `"list"`, `"text"`. |
| `name` | Required | string |  |
| `options` | Optional | Array of [PublicResolvedModifierOption](../models/PublicResolvedModifierOption.md#publicresolvedmodifieroption) |  |
| `position` | Optional | integer | Format: `int32`. |
| `pricing_scope` | Optional | string | Values: `"per_item"`, `"per_line"`. |
| `show_on_fulfillment` | Optional | boolean |  |
| `show_on_receipt` | Optional | boolean |  |
| `text` | Optional | [PublicResolvedTextModifier](../models/PublicResolvedTextModifier.md#publicresolvedtextmodifier) | Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits. |

