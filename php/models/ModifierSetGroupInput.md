[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetGroupInput

A modifier group as it appears in a modifier set, with its selection limits, display options, and per-modifier overrides.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Required | [ModifierGroupInput](../models/ModifierGroupInput.md#modifiergroupinput) | Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. A group of choices that customize an item. |
| `modifier_group_id` | Required | string | Stable identifier of the group contained in this entry, for either source. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_overrides` | Optional | Array of [ModifierOverrideInput](../models/ModifierOverrideInput.md#modifieroverrideinput) | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. |
| `modifier_set_group_id` | Required | string | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Example: `"msg_01KEZF7C008GXTVA2AQ1SRFGFC"`. |
| `position` | Required | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`. |

