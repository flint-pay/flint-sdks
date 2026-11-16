[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean or null | Whether buyers can select more than one unit of a list modifier. `allow_quantities`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesallow_quantities). |
| `created_at` | Optional | string or null | When the modifier group was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `max_quantity` | Optional | integer or null | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_quantity). |
| `max_selected` | Optional | integer or null | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. `max_selected`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_selected). |
| `max_total_quantity` | Optional | integer or null | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. `max_total_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_total_quantity). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this modifier group. `merchant_id`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `min_quantity` | Optional | integer or null | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_quantity). |
| `min_selected` | Optional | integer or null | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. `min_selected`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_selected). |
| `modifier_group_id` | Optional | string or null | Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. `modifier_group_id`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_id). |
| `modifier_group_type` | Optional | string or null | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. `modifier_group_type`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_type). |
| `modifiers` | Optional | Array of [ModifierPreviousAttributes](../models/ModifierPreviousAttributes.md#modifierpreviousattributes) or null | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. `modifiers`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the modifier group shown to buyers. `name`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesname). |
| `show_on_fulfillment` | Optional | boolean or null | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. `show_on_fulfillment`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. `show_on_receipt`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_receipt). |
| `status` | Optional | string or null | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesstatus). |
| `text` | Optional | Alternative shapes (see declared variants) | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. `text`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributestext). |
| `updated_at` | Optional | string or null | When the modifier group or its modifiers last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Version of the modifier group and its modifiers. `version`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesversion). |

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.allow_quantities

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.allow_quantities variant 1

anyOf variant 1: Whether buyers can select more than one unit of a list modifier..

- Value shape: boolean. Whether buyers can select more than one unit of a list modifier. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.allow_quantities variant 2

anyOf variant 2.

- Value shape: null. Whether buyers can select more than one unit of a list modifier. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.created_at

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the modifier group was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier group was created, as an RFC3339 timestamp. When the modifier group was created, as an RFC3339 timestamp. Format: `date-time`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier group was created, as an RFC3339 timestamp. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_quantity

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_quantity variant 1

anyOf variant 1: Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported..

- Value shape: integer. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_selected

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_selected variant 1

anyOf variant 1: Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value..

- Value shape: integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: `int32`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_selected variant 2

anyOf variant 2.

- Value shape: null. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_total_quantity

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_total_quantity variant 1

anyOf variant 1: Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported..

- Value shape: integer. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: `int64`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_total_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.merchant_id

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier group..

- Value shape: string. Identifier of the merchant that owns this modifier group. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier group. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_quantity

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_quantity variant 1

anyOf variant 1: Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported..

- Value shape: integer. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_selected

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_selected variant 1

anyOf variant 1: Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value..

- Value shape: integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: `int32`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_selected variant 2

anyOf variant 2.

- Value shape: null. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_id

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it..

- Value shape: string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_type

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_type variant 1

anyOf variant 1: Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list..

- Value shape: string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`.

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_type variant 2

anyOf variant 2.

- Value shape: null. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1

anyOf variant 1: Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices..

- Value shape: Array of [ModifierPreviousAttributes](../models/ModifierPreviousAttributes.md#modifierpreviousattributes). Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers-variant-1-fields-1created_at). |
| `default_quantity` | Optional | integer or null | Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. `default_quantity`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesdefault_quantity). |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Values: [12 declared values](#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers-variant-1-fields-1-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `modifier_group_id` | Optional | string or null | Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. `modifier_group_id`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers-variant-1-fields-1modifier_group_id). |
| `modifier_id` | Optional | string or null | Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. `modifier_id`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers-variant-1-fields-1modifier_id). |
| `name` | Optional | string or null | Name of the choice shown to buyers. `name`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesname). |
| `position` | Optional | integer or null | Display position of the choice within its group; lower values appear first. `position`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesposition). |
| `selected_by_default` | Optional | boolean or null | Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. `selected_by_default`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesselected_by_default). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this modifier appears in fulfillment details. `show_on_fulfillment`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this modifier appears on buyer receipts. `show_on_receipt`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesshow_on_receipt). |
| `status` | Optional | string or null | Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesstatus). |
| `taxable` | Optional | boolean or null | Whether this modifier's price is taxable. A modifier set can override this value. `taxable`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributestaxable). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. |
| `updated_at` | Optional | string or null | When the modifier last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers-variant-1-fields-1updated_at). |

#### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1 line_item_tax_category values

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

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.created_at

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the modifier was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier was created, as an RFC3339 timestamp. When the modifier was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier was created, as an RFC3339 timestamp. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.default_quantity

Declared alternatives: [ModifierPreviousAttributes.default_quantity](../models/ModifierPreviousAttributes.md#modifierpreviousattributesdefault_quantity).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.line_item_tax_category

Declared alternatives: [ModifierPreviousAttributes.line_item_tax_category](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.modifier_group_id

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.modifier_group_id variant 1

anyOf variant 1: Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set..

- Value shape: string. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.modifier_id

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.modifier_id variant 1

anyOf variant 1: Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one..

- Value shape: string. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.name

Declared alternatives: [ModifierPreviousAttributes.name](../models/ModifierPreviousAttributes.md#modifierpreviousattributesname).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.position

Declared alternatives: [ModifierPreviousAttributes.position](../models/ModifierPreviousAttributes.md#modifierpreviousattributesposition).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.selected_by_default

Declared alternatives: [ModifierPreviousAttributes.selected_by_default](../models/ModifierPreviousAttributes.md#modifierpreviousattributesselected_by_default).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.show_on_fulfillment

Declared alternatives: [ModifierPreviousAttributes.show_on_fulfillment](../models/ModifierPreviousAttributes.md#modifierpreviousattributesshow_on_fulfillment).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.show_on_receipt

Declared alternatives: [ModifierPreviousAttributes.show_on_receipt](../models/ModifierPreviousAttributes.md#modifierpreviousattributesshow_on_receipt).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.status

Declared alternatives: [ModifierPreviousAttributes.status](../models/ModifierPreviousAttributes.md#modifierpreviousattributesstatus).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.taxable

Declared alternatives: [ModifierPreviousAttributes.taxable](../models/ModifierPreviousAttributes.md#modifierpreviousattributestaxable).

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.updated_at

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.updated_at variant 1

anyOf variant 1: When the modifier last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier last changed, as an RFC3339 timestamp. When the modifier last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier last changed, as an RFC3339 timestamp. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.name

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Name of the modifier group shown to buyers..

- Value shape: string. Name of the modifier group shown to buyers. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group shown to buyers. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_fulfillment

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_fulfillment variant 1

anyOf variant 1: Whether selections from this group appear in fulfillment details unless overridden for a modifier set..

- Value shape: boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_receipt

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_receipt variant 1

anyOf variant 1: Whether selections from this group appear on buyer receipts unless overridden for a modifier set..

- Value shape: boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.status

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited..

- Value shape: string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text

Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Conditional | integer or null | Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. `max_length`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributestext-variant-1max_length). |
| `min_length` | Conditional | integer or null | Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. `min_length`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributestext-variant-1min_length). |
| `multiline` | Conditional | boolean or null | Whether the buyer's text can include line breaks. `multiline`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributestext-variant-1multiline). |
| `required` | Conditional | boolean or null | Whether buyers must enter text for this group. A modifier set's required override takes precedence. `required`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributestext-variant-1required). |

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1

anyOf TextModifierConfigPreviousAttributes.

- Optional: `max_length`, `min_length`, `multiline`, `required`.

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 2

anyOf variant 2.

- Undeclared: `max_length`, `min_length`, `multiline`, `required`.
- Value shape: null. Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.max_length

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.max_length variant 1

anyOf variant 1: Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace..

- Value shape: integer. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.max_length variant 2

anyOf variant 2.

- Value shape: null. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.min_length

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.min_length variant 1

anyOf variant 1: Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace..

- Value shape: integer. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.min_length variant 2

anyOf variant 2.

- Value shape: null. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.multiline

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.multiline variant 1

anyOf variant 1: Whether the buyer's text can include line breaks..

- Value shape: boolean. Whether the buyer's text can include line breaks. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.multiline variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer's text can include line breaks. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.required

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.required variant 1

anyOf variant 1: Whether buyers must enter text for this group. A modifier set's required override takes precedence..

- Value shape: boolean. Whether buyers must enter text for this group. A modifier set's required override takes precedence. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.text variant 1.required variant 2

anyOf variant 2.

- Value shape: null. Whether buyers must enter text for this group. A modifier set's required override takes precedence. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.updated_at

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the modifier group or its modifiers last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: `date-time`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.version

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Version of the modifier group and its modifiers..

- Value shape: integer. Version of the modifier group and its modifiers. Version of the modifier group and its modifiers. Format: `uint64`. minimum: `1`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Version of the modifier group and its modifiers. 

