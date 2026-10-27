[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetGroupExisting

The `existing` variant of `ModifierSetGroup`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Optional | [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of choices that customize an item. |
| `modifier_group_id` | Required | string | Identifier of the independent modifier group referenced when source is existing. |
| `modifier_group_name` | Required | string | Current name of the referenced modifier group. |
| `modifier_overrides` | Optional | Array of [ModifierOverride](../models/ModifierOverride.md#modifieroverride) | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. |
| `modifier_set_group_id` | Required | string | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. |
| `position` | Required | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; list groups use min_selected. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. References an independent modifier group. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. References an independent modifier group. Values: `"existing"`. |

