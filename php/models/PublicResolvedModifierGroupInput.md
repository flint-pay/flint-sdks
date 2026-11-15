[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedModifierGroupInput

A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean | Whether the buyer can select more than one unit of an option. Omitted when they can't. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer | Most options the buyer can select from a list group. Omitted when the group sets no limit. Format: `int32`. |
| `max_total_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer | Fewest options the buyer must select from a list group. Omitted when the group sets no minimum. Format: `int32`. |
| `modifier_group_id` | Required | string | ID of the modifier group. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_group_type` | Required | string | Whether the buyer chooses from a list of options or enters text. Values: `"list"`, `"text"`. |
| `name` | Required | string | Name of the group shown to the buyer. |
| `options` | Optional | Array of [PublicResolvedModifierOptionInput](../models/PublicResolvedModifierOptionInput.md#publicresolvedmodifieroptioninput) | Options the buyer can choose from in a list group. Empty for a text group. |
| `position` | Optional | integer | Position of the group among the groups offered for the line item. Lower values appear first. Format: `int32`. |
| `pricing_scope` | Optional | string | How the price of a selected option scales with the line item's quantity. Values: `"per_item"`, `"per_line"`. |
| `show_on_fulfillment` | Optional | boolean | Whether the buyer's selections from this group appear in fulfillment details. Omitted when they don't. |
| `show_on_receipt` | Optional | boolean | Whether the buyer's selections from this group appear on receipts. Omitted when they don't. |
| `text` | Optional | [PublicResolvedTextModifierInput](../models/PublicResolvedTextModifierInput.md#publicresolvedtextmodifierinput) | Entry rules for a text group. Omitted for a list group. Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits. |

