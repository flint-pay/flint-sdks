[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierOverridePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean or null | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. `available`: [declared alternatives](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinputavailable). |
| `default_quantity` | Optional | integer or null | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. `default_quantity`: [declared alternatives](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinputdefault_quantity). |
| `line_item_tax_category` | Optional | string or null | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#modifieroverridepreviousattributesinput-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinputline_item_tax_category). |
| `modifier_id` | Optional | string or null | Identifier of the list modifier these overrides apply to. `modifier_id`: [declared alternatives](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinputmodifier_id). |
| `selected_by_default` | Optional | boolean or null | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. `selected_by_default`: [declared alternatives](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinputselected_by_default). |
| `taxable` | Optional | boolean or null | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. `taxable`: [declared alternatives](../models/ModifierOverridePreviousAttributesInput.md#modifieroverridepreviousattributesinputtaxable). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. |

#### ModifierOverridePreviousAttributesInput line_item_tax_category values

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

### ModifierOverridePreviousAttributesInput.available

### ModifierOverridePreviousAttributesInput.available variant 1

anyOf variant 1: Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active..

- Value shape: boolean. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: `true`. 

### ModifierOverridePreviousAttributesInput.available variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. 

### ModifierOverridePreviousAttributesInput.default_quantity

### ModifierOverridePreviousAttributesInput.default_quantity variant 1

anyOf variant 1: Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported..

- Value shape: integer. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: `int64`. 

### ModifierOverridePreviousAttributesInput.default_quantity variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. 

### ModifierOverridePreviousAttributesInput.line_item_tax_category

### ModifierOverridePreviousAttributesInput.line_item_tax_category variant 1

anyOf variant 1: Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value..

- Value shape: string. Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ModifierOverridePreviousAttributesInput.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. 

### ModifierOverridePreviousAttributesInput.modifier_id

### ModifierOverridePreviousAttributesInput.modifier_id variant 1

anyOf variant 1: Identifier of the list modifier these overrides apply to..

- Value shape: string. Identifier of the list modifier these overrides apply to. Identifier of the list modifier these overrides apply to. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### ModifierOverridePreviousAttributesInput.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the list modifier these overrides apply to. 

### ModifierOverridePreviousAttributesInput.selected_by_default

### ModifierOverridePreviousAttributesInput.selected_by_default variant 1

anyOf variant 1: Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable..

- Value shape: boolean. Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. 

### ModifierOverridePreviousAttributesInput.selected_by_default variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. 

### ModifierOverridePreviousAttributesInput.taxable

### ModifierOverridePreviousAttributesInput.taxable variant 1

anyOf variant 1: Overrides the modifier's taxable for this set. Omit it to use the modifier's value..

- Value shape: boolean. Overrides the modifier's taxable for this set. Omit it to use the modifier's value. 

### ModifierOverridePreviousAttributesInput.taxable variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's taxable for this set. Omit it to use the modifier's value. 

