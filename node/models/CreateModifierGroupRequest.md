[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateModifierGroupRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean | Whether buyers can select more than one unit of a list modifier. Default: `false`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `max_quantity` | Optional | integer string | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `max_selected` | Optional | integer | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: `int32`. |
| `max_total_quantity` | Optional | integer string | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `min_quantity` | Optional | integer string | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `min_selected` | Optional | integer | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: `int32`. |
| `modifier_group_type` | Optional | string | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. |
| `modifiers` | Optional | Array of [CreateModifierRequest](../models/CreateModifierRequest.md#createmodifierrequest) | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. |
| `name` | Required | string | Name of the modifier group shown to buyers. minLength: `1`. maxLength: `255`. |
| `show_on_fulfillment` | Optional | boolean | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. |
| `show_on_receipt` | Optional | boolean | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. |
| `status` | Optional | string | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `text` | Optional | [TextModifierConfigRequest](../models/TextModifierConfigRequest.md#textmodifierconfigrequest) | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group when creating or updating one: required, multiline, and length limits. `text`: [field definitions](../models/CreateModifierGroupRequest.md#createmodifiergrouprequesttext). |

### CreateModifierGroupRequest variant 1

anyOf variant 1: Declared schema CreateInlineModifierGroupRequest. A modifier group defined inline when creating a modifier set, with its selection limits, modifiers or text rules, and display flags..

No additional constraints.

### CreateModifierGroupRequest variant 2

anyOf variant 2: Declared schema CreateModifierGroupRequest. The request body for: Create modifier group..

No additional constraints.

### CreateModifierGroupRequest.text

Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group when creating or updating one: required, multiline, and length limits.

Field definitions: [shared fields](TextModifierConfigRequestInput.md#textmodifierconfigrequestinput).

