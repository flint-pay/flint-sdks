[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputcreated_at). |
| `default_quantity` | Optional | integer or null | Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. `default_quantity`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputdefault_quantity). |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Values: [12 declared values](#modifierpreviousattributesinput-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputline_item_tax_category). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifier_group_id` | Optional | string or null | Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. `modifier_group_id`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputmodifier_group_id). |
| `modifier_id` | Optional | string or null | Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. `modifier_id`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputmodifier_id). |
| `name` | Optional | string or null | Name of the choice shown to buyers. `name`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputname). |
| `position` | Optional | integer or null | Display position of the choice within its group; lower values appear first. `position`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputposition). |
| `selected_by_default` | Optional | boolean or null | Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. `selected_by_default`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputselected_by_default). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this modifier appears in fulfillment details. `show_on_fulfillment`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this modifier appears on buyer receipts. `show_on_receipt`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputshow_on_receipt). |
| `status` | Optional | string or null | Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputstatus). |
| `taxable` | Optional | boolean or null | Whether this modifier's price is taxable. A modifier set can override this value. `taxable`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputtaxable). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. |
| `updated_at` | Optional | string or null | When the modifier last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputupdated_at). |

#### ModifierPreviousAttributesInput line_item_tax_category values

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

### ModifierPreviousAttributesInput.created_at

### ModifierPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the modifier was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier was created, as an RFC3339 timestamp. When the modifier was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier was created, as an RFC3339 timestamp. 

### ModifierPreviousAttributesInput.default_quantity

### ModifierPreviousAttributesInput.default_quantity variant 1

anyOf variant 1: Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: `int64`. 

### ModifierPreviousAttributesInput.default_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. 

### ModifierPreviousAttributesInput.line_item_tax_category

### ModifierPreviousAttributesInput.line_item_tax_category variant 1

anyOf variant 1: Flint line-item tax category..

- Value shape: string. Flint line-item tax category. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ModifierPreviousAttributesInput.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint line-item tax category. 

### ModifierPreviousAttributesInput.modifier_group_id

### ModifierPreviousAttributesInput.modifier_group_id variant 1

anyOf variant 1: Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set..

- Value shape: string. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierPreviousAttributesInput.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. 

### ModifierPreviousAttributesInput.modifier_id

### ModifierPreviousAttributesInput.modifier_id variant 1

anyOf variant 1: Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one..

- Value shape: string. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### ModifierPreviousAttributesInput.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. 

### ModifierPreviousAttributesInput.name

### ModifierPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the choice shown to buyers..

- Value shape: string. Name of the choice shown to buyers. 

### ModifierPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the choice shown to buyers. 

### ModifierPreviousAttributesInput.position

### ModifierPreviousAttributesInput.position variant 1

anyOf variant 1: Display position of the choice within its group; lower values appear first..

- Value shape: integer. Display position of the choice within its group; lower values appear first. Display position of the choice within its group; lower values appear first. Format: `int32`. 

### ModifierPreviousAttributesInput.position variant 2

anyOf variant 2.

- Value shape: null. Display position of the choice within its group; lower values appear first. 

### ModifierPreviousAttributesInput.selected_by_default

### ModifierPreviousAttributesInput.selected_by_default variant 1

anyOf variant 1: Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default..

- Value shape: boolean. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. 

### ModifierPreviousAttributesInput.selected_by_default variant 2

anyOf variant 2.

- Value shape: null. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. 

### ModifierPreviousAttributesInput.show_on_fulfillment

### ModifierPreviousAttributesInput.show_on_fulfillment variant 1

anyOf variant 1: Whether this modifier appears in fulfillment details..

- Value shape: boolean. Whether this modifier appears in fulfillment details. 

### ModifierPreviousAttributesInput.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier appears in fulfillment details. 

### ModifierPreviousAttributesInput.show_on_receipt

### ModifierPreviousAttributesInput.show_on_receipt variant 1

anyOf variant 1: Whether this modifier appears on buyer receipts..

- Value shape: boolean. Whether this modifier appears on buyer receipts. 

### ModifierPreviousAttributesInput.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier appears on buyer receipts. 

### ModifierPreviousAttributesInput.status

### ModifierPreviousAttributesInput.status variant 1

anyOf variant 1: Lifecycle status of the modifier. Only active modifiers can be offered to buyers..

- Value shape: string. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. 

### ModifierPreviousAttributesInput.taxable

### ModifierPreviousAttributesInput.taxable variant 1

anyOf variant 1: Whether this modifier's price is taxable. A modifier set can override this value..

- Value shape: boolean. Whether this modifier's price is taxable. A modifier set can override this value. 

### ModifierPreviousAttributesInput.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier's price is taxable. A modifier set can override this value. 

### ModifierPreviousAttributesInput.updated_at

### ModifierPreviousAttributesInput.updated_at variant 1

anyOf variant 1: When the modifier last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier last changed, as an RFC3339 timestamp. When the modifier last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierPreviousAttributesInput.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier last changed, as an RFC3339 timestamp. 

