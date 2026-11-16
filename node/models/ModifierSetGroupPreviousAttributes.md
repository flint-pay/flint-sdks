[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetGroupPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string or null | Overrides the group's name for this set. Omit it to use the group's name. `display_name`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesdisplay_name). |
| `max_selected` | Optional | integer or null | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. `max_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmax_selected). |
| `min_selected` | Optional | integer or null | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. `min_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmin_selected). |
| `modifier_group` | Optional | [ModifierGroupPreviousAttributes](../models/ModifierGroupPreviousAttributes.md#modifiergrouppreviousattributes) or null | Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. |
| `modifier_group_id` | Optional | string or null | Stable identifier of the group contained in this entry, for either source. `modifier_group_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group_id). |
| `modifier_overrides` | Optional | Array of [ModifierOverridePreviousAttributes](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributes) or null | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. `modifier_overrides`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_overrides). |
| `modifier_set_group_id` | Optional | string or null | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. `modifier_set_group_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_set_group_id). |
| `position` | Optional | integer or null | Display position of this group within the set; lower values appear first. `position`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesposition). |
| `required` | Optional | boolean or null | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. `required`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesrequired). |
| `show_on_fulfillment` | Optional | boolean or null | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. `show_on_fulfillment`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. `show_on_receipt`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesshow_on_receipt). |
| `source` | Optional | string or null | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`. `source`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributessource). |

### ModifierSetGroupPreviousAttributes.display_name

### ModifierSetGroupPreviousAttributes.display_name variant 1

anyOf variant 1: Overrides the group's name for this set. Omit it to use the group's name..

- Value shape: string. Overrides the group's name for this set. Omit it to use the group's name. 

### ModifierSetGroupPreviousAttributes.display_name variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's name for this set. Omit it to use the group's name. 

### ModifierSetGroupPreviousAttributes.max_selected

### ModifierSetGroupPreviousAttributes.max_selected variant 1

anyOf variant 1: Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit..

- Value shape: integer. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. 

### ModifierSetGroupPreviousAttributes.max_selected variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. 

### ModifierSetGroupPreviousAttributes.min_selected

### ModifierSetGroupPreviousAttributes.min_selected variant 1

anyOf variant 1: Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0..

- Value shape: integer. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: `int32`. 

### ModifierSetGroupPreviousAttributes.min_selected variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. 

### ModifierSetGroupPreviousAttributes.modifier_group_id

### ModifierSetGroupPreviousAttributes.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the group contained in this entry, for either source..

- Value shape: string. Stable identifier of the group contained in this entry, for either source. Stable identifier of the group contained in this entry, for either source. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierSetGroupPreviousAttributes.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the group contained in this entry, for either source. 

### ModifierSetGroupPreviousAttributes.modifier_overrides

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1

anyOf variant 1: Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false..

- Value shape: Array of [ModifierOverridePreviousAttributes](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributes). Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. 

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 2

anyOf variant 2.

- Value shape: null. Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. 

### ModifierSetGroupPreviousAttributes.modifier_set_group_id

### ModifierSetGroupPreviousAttributes.modifier_set_group_id variant 1

anyOf variant 1: Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one..

- Value shape: string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Example: `"msg_01KEZF7C008GXTVA2AQ1SRFGFC"`. 

### ModifierSetGroupPreviousAttributes.modifier_set_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. 

### ModifierSetGroupPreviousAttributes.position

### ModifierSetGroupPreviousAttributes.position variant 1

anyOf variant 1: Display position of this group within the set; lower values appear first..

- Value shape: integer. Display position of this group within the set; lower values appear first. Display position of this group within the set; lower values appear first. Format: `int32`. 

### ModifierSetGroupPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display position of this group within the set; lower values appear first. 

### ModifierSetGroupPreviousAttributes.required

### ModifierSetGroupPreviousAttributes.required variant 1

anyOf variant 1: Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection..

- Value shape: boolean. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. 

### ModifierSetGroupPreviousAttributes.required variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. 

### ModifierSetGroupPreviousAttributes.show_on_fulfillment

### ModifierSetGroupPreviousAttributes.show_on_fulfillment variant 1

anyOf variant 1: Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value..

- Value shape: boolean. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributes.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributes.show_on_receipt

### ModifierSetGroupPreviousAttributes.show_on_receipt variant 1

anyOf variant 1: Overrides the group's show_on_receipt for this set. Omit it to use the group's value..

- Value shape: boolean. Overrides the group's show_on_receipt for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributes.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's show_on_receipt for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributes.source

### ModifierSetGroupPreviousAttributes.source variant 1

anyOf variant 1: Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set..

- Value shape: string. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`.

### ModifierSetGroupPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. 

