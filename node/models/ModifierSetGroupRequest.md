[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetGroupRequest

A modifier group you add to a modifier set, either an existing group by ID or a new inline group, with selection limits and overrides.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. minLength: `1`. maxLength: `255`. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Conditional | [InlineModifierGroupRequest](../models/InlineModifierGroupRequest.md#inlinemodifiergrouprequest) | Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group defined inline when setting up a modifier set, with its name, rules for how many options can be selected, and its modifiers. |
| `modifier_group_id` | Conditional | string | Identifier of the independent modifier group referenced when source is existing. minLength: `1`. |
| `modifier_overrides` | Optional | Array of [ModifierOverride](../models/ModifierOverride.md#modifieroverride) | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. |
| `modifier_set_group_id` | Optional | string | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. minLength: `1`. |
| `position` | Optional | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; list groups use min_selected. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Use inline for a modifier group owned by this modifier set, or existing to reference an independent modifier group. Values: `"existing"`, `"inline"`. |

### ModifierSetGroupRequest variant 1: `source` = `"existing"`

oneOf variant 1: The `existing` variant of `ModifierSetGroupInput`..

- Condition: not (present(`modifier_group`)).
- Required: `modifier_group_id`.
- Optional: `modifier_group`.
- Constraints for `source`: References an independent modifier group. Values: `"existing"`.

### ModifierSetGroupRequest variant 2: `source` = `"inline"`

oneOf variant 2: The `inline` variant of `ModifierSetGroupInput`..

- Condition: not (present(`modifier_group_id`)).
- Required: `modifier_group`.
- Optional: `modifier_group_id`.
- Constraints for `source`: Defines a modifier group owned by this modifier set. Values: `"inline"`.

