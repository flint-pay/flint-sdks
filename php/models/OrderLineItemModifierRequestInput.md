[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemModifierRequestInput

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Map values: minLength: `1`. |
| `modifier_id` | Conditional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Conditional | [TextModifierRequestInput](../models/TextModifierRequestInput.md#textmodifierrequestinput) | Text a buyer entered for a text modifier group on an order line item. |

### OrderLineItemModifierRequestInput variant 1

oneOf variant 1.

- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.

### OrderLineItemModifierRequestInput variant 2

oneOf variant 2.

- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.

