[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateModifierSetGroupInputExisting

The `existing` variant of `CreateModifierSetGroupInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. minLength: `1`. maxLength: `255`. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Optional | [CreateModifierGroupRequest](../models/CreateModifierGroupRequest.md#createmodifiergrouprequest) | Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a modifier set, with its selection limits, modifiers or text rules, and display flags. |
| `modifier_group_id` | Required | string | Identifier of the independent modifier group referenced when source is existing. minLength: `1`. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_overrides` | Optional | Array of [ModifierOverride](../models/ModifierOverride.md#modifieroverride) | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. `modifier_overrides[]`: [field definitions](../models/CreateModifierSetGroupInputExisting.md#createmodifiersetgroupinputexistingmodifier_overrides). |
| `position` | Optional | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Use inline for a modifier group owned by this modifier set, or existing to reference an independent modifier group. References an independent modifier group. Use inline for a modifier group owned by this modifier set, or existing to reference an independent modifier group. References an independent modifier group. Values: `"existing"`. |

### CreateModifierSetGroupInputExisting.modifier_overrides[]

Settings for one modifier that apply only within a modifier set group, overriding the modifier group's own values.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: `true`. |
| `default_quantity` | Optional | integer | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#createmodifiersetgroupinputexistingmodifier_overrides-line_item_tax_category-values). |
| `modifier_id` | Required | string | Identifier of the list modifier these overrides apply to. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `selected_by_default` | Optional | boolean | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. |
| `taxable` | Optional | boolean | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. |
| `unit_price_delta_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_delta_money`: [field definitions](../models/CreateModifierSetGroupInputExisting.md#createmodifiersetgroupinputexistingmodifier_overridesunit_price_delta_money). |

#### CreateModifierSetGroupInputExisting.modifier_overrides[] line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### CreateModifierSetGroupInputExisting.modifier_overrides[].unit_price_delta_money

Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

