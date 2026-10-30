[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemModifierRequestInput

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_id` | Conditional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Conditional | [TextModifierRequestInput](../models/TextModifierRequestInput.md#textmodifierrequestinput) | Text a buyer entered for a text modifier group on an order line item. |
| `type` | Required | string | Selects the type branch. Values: `"catalog"`, `"text"`. |

### OrderLineItemModifierRequestInput variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### OrderLineItemModifierRequestInput variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

