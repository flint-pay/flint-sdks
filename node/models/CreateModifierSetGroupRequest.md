[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateModifierSetGroupRequest

A modifier group to add to a modifier set, either an existing group by ID or one defined inline, chosen by `source`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. minLength: `1`. maxLength: `255`. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Conditional | [CreateModifierGroupRequest](../models/CreateModifierGroupRequest.md#createmodifiergrouprequest) | Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a modifier set, with its selection limits, modifiers or text rules, and display flags. |
| `modifier_group_id` | Conditional | string | Identifier of the independent modifier group referenced when source is existing. minLength: `1`. |
| `modifier_overrides` | Optional | Array of [ModifierOverride](../models/ModifierOverride.md#modifieroverride) | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. |
| `position` | Optional | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Use inline for a modifier group owned by this modifier set, or existing to reference an independent modifier group. Values: `"existing"`, `"inline"`. |

### CreateModifierSetGroupRequest variant 1: `source` = `"existing"`

oneOf with source: "existing": The `existing` variant of `CreateModifierSetGroupInput`..

- Condition: not (present(`modifier_group`)).
- Required: `modifier_group_id`.
- Optional: `modifier_group`.
- Constraints for `source`: References an independent modifier group. Values: `"existing"`.

### CreateModifierSetGroupRequest variant 2: `source` = `"inline"`

oneOf with source: "inline": The `inline` variant of `CreateModifierSetGroupInput`..

- Condition: not (present(`modifier_group_id`)).
- Required: `modifier_group`.
- Optional: `modifier_group_id`.
- Constraints for `source`: Defines a modifier group owned by this modifier set. Values: `"inline"`.

