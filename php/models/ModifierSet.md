[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSet

A reusable collection of customization groups.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this modifier set. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifier_groups` | Required | Array of (object and Alternative shapes (see declared variants)) | Ordered group entries in this set, including references to reusable groups and groups owned by the set. `modifier_groups[]`: [declared alternatives](../models/ModifierSet.md#modifiersetmodifier_groups). |
| `modifier_set_id` | Required | string | Stable identifier of the modifier set assigned to catalog items. |
| `name` | Required | string | Name used to identify this modifier set. |
| `status` | Required | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When the modifier set, its group entries, or its inline groups last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Version of the modifier set, its group entries, and its inline groups. Send it as expected_version when replacing modifier_groups. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### ModifierSet.modifier_groups[]

A modifier group as it appears in a modifier set, with its selection limits, display options, and per-modifier overrides.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Conditional | [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of choices that customize an item. |
| `modifier_group_id` | Conditional | string | Identifier of the independent modifier group referenced when source is existing. |
| `modifier_group_name` | Conditional | string | Current name of the referenced modifier group. |
| `modifier_overrides` | Optional | Array of object | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. `modifier_overrides[]`: [field definitions](../models/ModifierSet.md#modifiersetmodifier_groupsmodifier_overrides). |
| `modifier_set_group_id` | Required | string | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. |
| `position` | Required | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; list groups use min_selected. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`. |

### ModifierSet.modifier_groups[] variant 1: `source` = `"existing"`

oneOf variant 1: The `existing` variant of `ModifierSetGroup`..

- Condition: not (present(`modifier_group`)).
- Required: `modifier_group_id`, `modifier_group_name`.
- Optional: `modifier_group`.
- Constraints for `source`: References an independent modifier group. Values: `"existing"`.

### ModifierSet.modifier_groups[] variant 2: `source` = `"inline"`

oneOf variant 2: The `inline` variant of `ModifierSetGroup`..

- Condition: not (present(`modifier_group_id`)).
- Required: `modifier_group`.
- Optional: `modifier_group_id`, `modifier_group_name`.
- Constraints for `source`: Defines a modifier group owned by this modifier set. Values: `"inline"`.

### ModifierSet.modifier_groups[].modifier_overrides[]

Settings for one modifier that apply only within a modifier set group, overriding the modifier group's own values.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: `true`. |
| `default_quantity` | Optional | integer string | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#modifiersetmodifier_groupsmodifier_overrides-line_item_tax_category-values). |
| `modifier_id` | Required | string | Identifier of the list modifier these overrides apply to. minLength: `1`. |
| `selected_by_default` | Optional | boolean | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. |
| `taxable` | Optional | boolean | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. |
| `unit_price_delta_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### ModifierSet.modifier_groups[].modifier_overrides[] line_item_tax_category values

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

