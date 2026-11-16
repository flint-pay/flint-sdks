[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributescreated_at). |
| `default_quantity` | Optional | integer or null | Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. `default_quantity`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesdefault_quantity). |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Values: [12 declared values](#modifierpreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_group_id` | Optional | string or null | Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. `modifier_group_id`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesmodifier_group_id). |
| `modifier_id` | Optional | string or null | Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. `modifier_id`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesmodifier_id). |
| `name` | Optional | string or null | Name of the choice shown to buyers. `name`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesname). |
| `position` | Optional | integer or null | Display position of the choice within its group; lower values appear first. `position`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesposition). |
| `selected_by_default` | Optional | boolean or null | Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. `selected_by_default`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesselected_by_default). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this modifier appears in fulfillment details. `show_on_fulfillment`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this modifier appears on buyer receipts. `show_on_receipt`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesshow_on_receipt). |
| `status` | Optional | string or null | Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesstatus). |
| `taxable` | Optional | boolean or null | Whether this modifier's price is taxable. A modifier set can override this value. `taxable`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributestaxable). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. `unit_price_delta_money`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesunit_price_delta_money). |
| `updated_at` | Optional | string or null | When the modifier last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesupdated_at). |

#### ModifierPreviousAttributes line_item_tax_category values

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

### ModifierPreviousAttributes.created_at

### ModifierPreviousAttributes.created_at variant 1

anyOf variant 1: When the modifier was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier was created, as an RFC3339 timestamp. When the modifier was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier was created, as an RFC3339 timestamp. 

### ModifierPreviousAttributes.default_quantity

### ModifierPreviousAttributes.default_quantity variant 1

anyOf variant 1: Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: `int64`. 

### ModifierPreviousAttributes.default_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. 

### ModifierPreviousAttributes.line_item_tax_category

### ModifierPreviousAttributes.line_item_tax_category variant 1

anyOf variant 1: Flint line-item tax category..

- Value shape: string. Flint line-item tax category. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ModifierPreviousAttributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint line-item tax category. 

### ModifierPreviousAttributes.metadata

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata).

### ModifierPreviousAttributes.modifier_group_id

### ModifierPreviousAttributes.modifier_group_id variant 1

anyOf variant 1: Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set..

- Value shape: string. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierPreviousAttributes.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. 

### ModifierPreviousAttributes.modifier_id

### ModifierPreviousAttributes.modifier_id variant 1

anyOf variant 1: Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one..

- Value shape: string. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### ModifierPreviousAttributes.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. 

### ModifierPreviousAttributes.name

### ModifierPreviousAttributes.name variant 1

anyOf variant 1: Name of the choice shown to buyers..

- Value shape: string. Name of the choice shown to buyers. 

### ModifierPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the choice shown to buyers. 

### ModifierPreviousAttributes.position

### ModifierPreviousAttributes.position variant 1

anyOf variant 1: Display position of the choice within its group; lower values appear first..

- Value shape: integer. Display position of the choice within its group; lower values appear first. Display position of the choice within its group; lower values appear first. Format: `int32`. 

### ModifierPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display position of the choice within its group; lower values appear first. 

### ModifierPreviousAttributes.selected_by_default

### ModifierPreviousAttributes.selected_by_default variant 1

anyOf variant 1: Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default..

- Value shape: boolean. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. 

### ModifierPreviousAttributes.selected_by_default variant 2

anyOf variant 2.

- Value shape: null. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. 

### ModifierPreviousAttributes.show_on_fulfillment

### ModifierPreviousAttributes.show_on_fulfillment variant 1

anyOf variant 1: Whether this modifier appears in fulfillment details..

- Value shape: boolean. Whether this modifier appears in fulfillment details. 

### ModifierPreviousAttributes.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier appears in fulfillment details. 

### ModifierPreviousAttributes.show_on_receipt

### ModifierPreviousAttributes.show_on_receipt variant 1

anyOf variant 1: Whether this modifier appears on buyer receipts..

- Value shape: boolean. Whether this modifier appears on buyer receipts. 

### ModifierPreviousAttributes.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier appears on buyer receipts. 

### ModifierPreviousAttributes.status

### ModifierPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status of the modifier. Only active modifiers can be offered to buyers..

- Value shape: string. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. 

### ModifierPreviousAttributes.taxable

### ModifierPreviousAttributes.taxable variant 1

anyOf variant 1: Whether this modifier's price is taxable. A modifier set can override this value..

- Value shape: boolean. Whether this modifier's price is taxable. A modifier set can override this value. 

### ModifierPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether this modifier's price is taxable. A modifier set can override this value. 

### ModifierPreviousAttributes.unit_price_delta_money

Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ModifierPreviousAttributes.unit_price_delta_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ModifierPreviousAttributes.unit_price_delta_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. 

### ModifierPreviousAttributes.unit_price_delta_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ModifierPreviousAttributes.unit_price_delta_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ModifierPreviousAttributes.updated_at

### ModifierPreviousAttributes.updated_at variant 1

anyOf variant 1: When the modifier last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier last changed, as an RFC3339 timestamp. When the modifier last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier last changed, as an RFC3339 timestamp. 

