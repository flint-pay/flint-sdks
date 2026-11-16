[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierOverridePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean or null | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. `available`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesavailable). |
| `default_quantity` | Optional | integer or null | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. `default_quantity`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesdefault_quantity). |
| `line_item_tax_category` | Optional | string or null | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#modifieroverridepreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesline_item_tax_category). |
| `modifier_id` | Optional | string or null | Identifier of the list modifier these overrides apply to. `modifier_id`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesmodifier_id). |
| `selected_by_default` | Optional | boolean or null | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. `selected_by_default`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesselected_by_default). |
| `taxable` | Optional | boolean or null | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. `taxable`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributestaxable). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. |

#### ModifierOverridePreviousAttributes line_item_tax_category values

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

### ModifierOverridePreviousAttributes.available

### ModifierOverridePreviousAttributes.available variant 1

anyOf variant 1: Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active..

- Value shape: boolean. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: `true`. 

### ModifierOverridePreviousAttributes.available variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. 

### ModifierOverridePreviousAttributes.default_quantity

### ModifierOverridePreviousAttributes.default_quantity variant 1

anyOf variant 1: Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported..

- Value shape: integer. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: `int64`. 

### ModifierOverridePreviousAttributes.default_quantity variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. 

### ModifierOverridePreviousAttributes.line_item_tax_category

### ModifierOverridePreviousAttributes.line_item_tax_category variant 1

anyOf variant 1: Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value..

- Value shape: string. Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ModifierOverridePreviousAttributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. 

### ModifierOverridePreviousAttributes.modifier_id

### ModifierOverridePreviousAttributes.modifier_id variant 1

anyOf variant 1: Identifier of the list modifier these overrides apply to..

- Value shape: string. Identifier of the list modifier these overrides apply to. Identifier of the list modifier these overrides apply to. minLength: `1`. 

### ModifierOverridePreviousAttributes.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the list modifier these overrides apply to. 

### ModifierOverridePreviousAttributes.selected_by_default

### ModifierOverridePreviousAttributes.selected_by_default variant 1

anyOf variant 1: Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable..

- Value shape: boolean. Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. 

### ModifierOverridePreviousAttributes.selected_by_default variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. 

### ModifierOverridePreviousAttributes.taxable

### ModifierOverridePreviousAttributes.taxable variant 1

anyOf variant 1: Overrides the modifier's taxable for this set. Omit it to use the modifier's value..

- Value shape: boolean. Overrides the modifier's taxable for this set. Omit it to use the modifier's value. 

### ModifierOverridePreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Overrides the modifier's taxable for this set. Omit it to use the modifier's value. 

