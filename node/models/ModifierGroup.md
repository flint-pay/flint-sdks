[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroup

A group of choices that customize an item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Required | boolean | Whether buyers can select more than one unit of a list modifier. |
| `created_at` | Optional | string | When the modifier group was created, as an RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `max_quantity` | Optional | integer string | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `max_selected` | Optional | integer | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: `int32`. |
| `max_total_quantity` | Optional | integer string | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this modifier group. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata). |
| `min_quantity` | Optional | integer string | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `min_selected` | Optional | integer | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: `int32`. |
| `modifier_group_id` | Required | string | Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. |
| `modifier_group_type` | Required | string | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. |
| `modifiers` | Required | Array of [Modifier](../models/Modifier.md#modifier) | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. |
| `name` | Required | string | Name of the modifier group shown to buyers. |
| `show_on_fulfillment` | Required | boolean | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. |
| `show_on_receipt` | Required | boolean | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. |
| `status` | Required | string | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `text` | Optional | [TextModifierConfig](../models/TextModifierConfig.md#textmodifierconfig) | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group: whether input is required or multiline, and its length limits. |
| `updated_at` | Optional | string | When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Version of the modifier group and its modifiers. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### ModifierGroup.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

