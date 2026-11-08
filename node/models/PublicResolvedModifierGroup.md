[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedModifierGroup

A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean |  |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer | Format: `int32`. |
| `max_total_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer | Format: `int32`. |
| `modifier_group_id` | Required | string | Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_group_type` | Required | string | Values: `"list"`, `"text"`. |
| `name` | Required | string |  |
| `options` | Optional | Array of [PublicResolvedModifierOption](../models/PublicResolvedModifierOption.md#publicresolvedmodifieroption) |  |
| `position` | Optional | integer | Format: `int32`. |
| `pricing_scope` | Optional | string | Values: `"per_item"`. |
| `show_on_fulfillment` | Optional | boolean |  |
| `show_on_receipt` | Optional | boolean |  |
| `text` | Optional | [TextModifierConfigRequest](../models/TextModifierConfigRequest.md#textmodifierconfigrequest) | Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits. `text`: [field definitions](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergrouptext). |

### PublicResolvedModifierGroup.text

Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer | Most characters the buyer can enter. Format: `int32`. |
| `min_length` | Optional | integer | Fewest characters the buyer can enter. Format: `int32`. |
| `multiline` | Optional | boolean | Whether the buyer can enter more than one line. |
| `required` | Optional | boolean | Whether the buyer must enter text. |

