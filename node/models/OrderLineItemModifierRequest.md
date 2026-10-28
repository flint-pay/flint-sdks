[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemModifierRequest

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiersmetadata). |
| `modifier_id` | Conditional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Conditional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | Text a buyer entered for a text modifier group on an order line item. `text`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifierstext). |
| `type` | Required | string | Selects the type branch. Values: `"catalog"`, `"text"`. |

### OrderLineItemModifierRequest variant 1: `type` = `"catalog"`

oneOf variant 1: The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### OrderLineItemModifierRequest variant 2: `type` = `"text"`

oneOf variant 2: The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### OrderLineItemModifierRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].modifiers[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiersmetadata).

### OrderLineItemModifierRequest.text

Field definitions: [AddLineItemsRequest.line_items[].modifiers[].text](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifierstext).

