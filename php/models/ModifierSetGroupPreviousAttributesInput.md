[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetGroupPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string or null | Overrides the group's name for this set. Omit it to use the group's name. `display_name`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputdisplay_name). |
| `max_selected` | Optional | integer or null | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. `max_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputmax_selected). |
| `min_selected` | Optional | integer or null | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. `min_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputmin_selected). |
| `modifier_group` | Optional | [ModifierGroupPreviousAttributesInput](../models/ModifierGroupPreviousAttributesInput.md#modifiergrouppreviousattributesinput) or null | Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. |
| `modifier_group_id` | Optional | string or null | Stable identifier of the group contained in this entry, for either source. `modifier_group_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputmodifier_group_id). |
| `modifier_overrides` | Optional | Array of [ModifierOverridePreviousAttributesInput](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinput) or null | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. `modifier_overrides`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputmodifier_overrides). |
| `modifier_set_group_id` | Optional | string or null | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. `modifier_set_group_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputmodifier_set_group_id). |
| `position` | Optional | integer or null | Display position of this group within the set; lower values appear first. `position`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputposition). |
| `required` | Optional | boolean or null | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. `required`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputrequired). |
| `show_on_fulfillment` | Optional | boolean or null | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. `show_on_fulfillment`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. `show_on_receipt`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputshow_on_receipt). |
| `source` | Optional | string or null | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`. `source`: [declared alternatives](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinputsource). |

### ModifierSetGroupPreviousAttributesInput.display_name

### ModifierSetGroupPreviousAttributesInput.display_name variant 1

anyOf variant 1: Overrides the group's name for this set. Omit it to use the group's name..

- Value shape: string. Overrides the group's name for this set. Omit it to use the group's name. 

### ModifierSetGroupPreviousAttributesInput.display_name variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's name for this set. Omit it to use the group's name. 

### ModifierSetGroupPreviousAttributesInput.max_selected

### ModifierSetGroupPreviousAttributesInput.max_selected variant 1

anyOf variant 1: Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit..

- Value shape: integer. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. 

### ModifierSetGroupPreviousAttributesInput.max_selected variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. 

### ModifierSetGroupPreviousAttributesInput.min_selected

### ModifierSetGroupPreviousAttributesInput.min_selected variant 1

anyOf variant 1: Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0..

- Value shape: integer. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: `int32`. 

### ModifierSetGroupPreviousAttributesInput.min_selected variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. 

### ModifierSetGroupPreviousAttributesInput.modifier_group_id

### ModifierSetGroupPreviousAttributesInput.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the group contained in this entry, for either source..

- Value shape: string. Stable identifier of the group contained in this entry, for either source. Stable identifier of the group contained in this entry, for either source. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierSetGroupPreviousAttributesInput.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the group contained in this entry, for either source. 

### ModifierSetGroupPreviousAttributesInput.modifier_overrides

### ModifierSetGroupPreviousAttributesInput.modifier_overrides variant 1

anyOf variant 1: Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false..

- Value shape: Array of [ModifierOverridePreviousAttributesInput](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinput). Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. 

### ModifierSetGroupPreviousAttributesInput.modifier_overrides variant 2

anyOf variant 2.

- Value shape: null. Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. 

### ModifierSetGroupPreviousAttributesInput.modifier_set_group_id

### ModifierSetGroupPreviousAttributesInput.modifier_set_group_id variant 1

anyOf variant 1: Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one..

- Value shape: string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Example: `"msg_01KEZF7C008GXTVA2AQ1SRFGFC"`. 

### ModifierSetGroupPreviousAttributesInput.modifier_set_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. 

### ModifierSetGroupPreviousAttributesInput.position

### ModifierSetGroupPreviousAttributesInput.position variant 1

anyOf variant 1: Display position of this group within the set; lower values appear first..

- Value shape: integer. Display position of this group within the set; lower values appear first. Display position of this group within the set; lower values appear first. Format: `int32`. 

### ModifierSetGroupPreviousAttributesInput.position variant 2

anyOf variant 2.

- Value shape: null. Display position of this group within the set; lower values appear first. 

### ModifierSetGroupPreviousAttributesInput.required

### ModifierSetGroupPreviousAttributesInput.required variant 1

anyOf variant 1: Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection..

- Value shape: boolean. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. 

### ModifierSetGroupPreviousAttributesInput.required variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. 

### ModifierSetGroupPreviousAttributesInput.show_on_fulfillment

### ModifierSetGroupPreviousAttributesInput.show_on_fulfillment variant 1

anyOf variant 1: Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value..

- Value shape: boolean. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributesInput.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributesInput.show_on_receipt

### ModifierSetGroupPreviousAttributesInput.show_on_receipt variant 1

anyOf variant 1: Overrides the group's show_on_receipt for this set. Omit it to use the group's value..

- Value shape: boolean. Overrides the group's show_on_receipt for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributesInput.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Overrides the group's show_on_receipt for this set. Omit it to use the group's value. 

### ModifierSetGroupPreviousAttributesInput.source

### ModifierSetGroupPreviousAttributesInput.source variant 1

anyOf variant 1: Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set..

- Value shape: string. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`.

### ModifierSetGroupPreviousAttributesInput.source variant 2

anyOf variant 2.

- Value shape: null. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. 

