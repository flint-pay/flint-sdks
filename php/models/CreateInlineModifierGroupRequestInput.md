[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInlineModifierGroupRequestInput

A modifier group defined inline when creating a modifier set, with its selection limits, modifiers or text rules, and display flags.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean | Whether buyers can select more than one unit of a list modifier. Default: `false`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `max_quantity` | Optional | integer | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: `int32`. |
| `max_total_quantity` | Optional | integer | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: `int64`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `min_quantity` | Optional | integer | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: `int32`. |
| `modifier_group_type` | Optional | string | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. |
| `modifiers` | Optional | Array of [CreateModifierRequestInput](../models/CreateModifierRequestInput.md#createmodifierrequestinput) | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. |
| `name` | Required | string | Name of the modifier group shown to buyers. minLength: `1`. maxLength: `255`. |
| `show_on_fulfillment` | Optional | boolean | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. |
| `show_on_receipt` | Optional | boolean | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. |
| `status` | Optional | string | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `text` | Optional | [TextModifierConfigRequestInput](../models/TextModifierConfigRequestInput.md#textmodifierconfigrequestinput) | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group when creating or updating one: required, multiline, and length limits. |

