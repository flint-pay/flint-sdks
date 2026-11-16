[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetGroupPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string or null | Overrides the group's name for this set. Omit it to use the group's name. `display_name`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesdisplay_name). |
| `max_selected` | Optional | integer or null | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. `max_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmax_selected). |
| `min_selected` | Optional | integer or null | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. `min_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmin_selected). |
| `modifier_group` | Optional | [ModifierGroupPreviousAttributes](../models/ModifierGroupPreviousAttributes.md#modifiergrouppreviousattributes) or null | Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. `modifier_group`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group). |
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

### ModifierSetGroupPreviousAttributes.modifier_group

Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Conditional | boolean or null | Whether buyers can select more than one unit of a list modifier. `allow_quantities`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesallow_quantities). |
| `created_at` | Conditional | string or null | When the modifier group was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group-variant-1created_at). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `max_quantity` | Conditional | integer or null | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_quantity). |
| `max_selected` | Conditional | integer or null | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. `max_selected`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_selected). |
| `max_total_quantity` | Conditional | integer or null | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. `max_total_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_total_quantity). |
| `merchant_id` | Conditional | string or null | Identifier of the merchant that owns this modifier group. `merchant_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group-variant-1merchant_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `min_quantity` | Conditional | integer or null | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_quantity). |
| `min_selected` | Conditional | integer or null | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. `min_selected`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_selected). |
| `modifier_group_id` | Conditional | string or null | Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. `modifier_group_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group-variant-1modifier_group_id). |
| `modifier_group_type` | Conditional | string or null | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. `modifier_group_type`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_type). |
| `modifiers` | Conditional | Array of [ModifierPreviousAttributes](../models/ModifierPreviousAttributes.md#modifierpreviousattributes) or null | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. `modifiers`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers). |
| `name` | Conditional | string or null | Name of the modifier group shown to buyers. `name`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesname). |
| `show_on_fulfillment` | Conditional | boolean or null | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. `show_on_fulfillment`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Conditional | boolean or null | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. `show_on_receipt`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_receipt). |
| `status` | Conditional | string or null | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesstatus). |
| `text` | Conditional | [TextModifierConfigPreviousAttributes](../models/TextModifierConfigPreviousAttributes.md#textmodifierconfigpreviousattributes) or null | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. |
| `updated_at` | Conditional | string or null | When the modifier group or its modifiers last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group-variant-1updated_at). |
| `version` | Conditional | integer or null | Version of the modifier group and its modifiers. `version`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesversion). |

### ModifierSetGroupPreviousAttributes.modifier_group variant 1

anyOf ModifierGroupPreviousAttributes.

- Optional: `allow_quantities`, `created_at`, `external_reference_id`, `max_quantity`, `max_selected`, `max_total_quantity`, `merchant_id`, `metadata`, `min_quantity`, `min_selected`, `modifier_group_id`, `modifier_group_type`, `modifiers`, `name`, `show_on_fulfillment`, `show_on_receipt`, `status`, `text`, `updated_at`, `version`.

### ModifierSetGroupPreviousAttributes.modifier_group variant 2

anyOf variant 2.

- Undeclared: `allow_quantities`, `created_at`, `external_reference_id`, `max_quantity`, `max_selected`, `max_total_quantity`, `merchant_id`, `metadata`, `min_quantity`, `min_selected`, `modifier_group_id`, `modifier_group_type`, `modifiers`, `name`, `show_on_fulfillment`, `show_on_receipt`, `status`, `text`, `updated_at`, `version`.
- Value shape: null. Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.allow_quantities

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.allow_quantities](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesallow_quantities).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.created_at

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.created_at variant 1

anyOf variant 1: When the modifier group was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier group was created, as an RFC3339 timestamp. When the modifier group was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier group was created, as an RFC3339 timestamp. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.max_quantity

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_quantity](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_quantity).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.max_selected

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_selected](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_selected).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.max_total_quantity

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.max_total_quantity](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmax_total_quantity).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.merchant_id

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier group..

- Value shape: string. Identifier of the merchant that owns this modifier group. Identifier of the merchant that owns this modifier group. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier group. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.min_quantity

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_quantity](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_quantity).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.min_selected

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.min_selected](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_selected).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.modifier_group_id

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it..

- Value shape: string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.modifier_group_type

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifier_group_type](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_type).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.modifiers

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.name

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.name](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesname).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.show_on_fulfillment

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_fulfillment](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_fulfillment).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.show_on_receipt

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.show_on_receipt](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_receipt).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.status

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.status](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesstatus).

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.updated_at

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.updated_at variant 1

anyOf variant 1: When the modifier group or its modifiers last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. 

### ModifierSetGroupPreviousAttributes.modifier_group variant 1.version

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.version](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesversion).

### ModifierSetGroupPreviousAttributes.modifier_group_id

### ModifierSetGroupPreviousAttributes.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the group contained in this entry, for either source..

- Value shape: string. Stable identifier of the group contained in this entry, for either source. 

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

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean or null | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. `available`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesavailable). |
| `default_quantity` | Optional | integer or null | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. `default_quantity`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesdefault_quantity). |
| `line_item_tax_category` | Optional | string or null | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#modifiersetgrouppreviousattributesmodifier_overrides-variant-1-fields-1-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesline_item_tax_category). |
| `modifier_id` | Optional | string or null | Identifier of the list modifier these overrides apply to. `modifier_id`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_overrides-variant-1-fields-1modifier_id). |
| `selected_by_default` | Optional | boolean or null | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. `selected_by_default`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesselected_by_default). |
| `taxable` | Optional | boolean or null | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. `taxable`: [declared alternatives](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributestaxable). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. |

#### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1 line_item_tax_category values

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

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.available

Declared alternatives: [ModifierOverridePreviousAttributes.available](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesavailable).

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.default_quantity

Declared alternatives: [ModifierOverridePreviousAttributes.default_quantity](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesdefault_quantity).

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.line_item_tax_category

Declared alternatives: [ModifierOverridePreviousAttributes.line_item_tax_category](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesline_item_tax_category).

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.modifier_id

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.modifier_id variant 1

anyOf variant 1: Identifier of the list modifier these overrides apply to..

- Value shape: string. Identifier of the list modifier these overrides apply to. Identifier of the list modifier these overrides apply to. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the list modifier these overrides apply to. 

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.selected_by_default

Declared alternatives: [ModifierOverridePreviousAttributes.selected_by_default](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributesselected_by_default).

### ModifierSetGroupPreviousAttributes.modifier_overrides variant 1.[] fields 1.taxable

Declared alternatives: [ModifierOverridePreviousAttributes.taxable](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributestaxable).

### ModifierSetGroupPreviousAttributes.modifier_set_group_id

### ModifierSetGroupPreviousAttributes.modifier_set_group_id variant 1

anyOf variant 1: Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one..

- Value shape: string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. 

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

