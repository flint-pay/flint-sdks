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
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata). |
| `min_quantity` | Optional | integer or null | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_quantity). |
| `min_selected` | Optional | integer or null | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. `min_selected`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmin_selected). |
| `modifier_group_id` | Optional | string or null | Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. `modifier_group_id`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_id). |
| `modifier_group_type` | Optional | string or null | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. `modifier_group_type`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifier_group_type). |
| `modifiers` | Optional | Array of [Modifier](../models/Modifier.md#modifier) or null | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. `modifiers`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the modifier group shown to buyers. `name`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesname). |
| `show_on_fulfillment` | Optional | boolean or null | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. `show_on_fulfillment`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. `show_on_receipt`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesshow_on_receipt). |
| `status` | Optional | string or null | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesstatus). |
| `text` | Optional | [TextModifierConfig](../models/TextModifierConfig.md#textmodifierconfig) or null | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. |
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

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API..

- Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: maxLength: `4096`. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. 

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

- Value shape: Array of [Modifier](../models/Modifier.md#modifier). Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. 

### ModifierGroupArchivedMerchantEventDataPreviousAttributes.modifiers variant 1.[] fields 1

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_groupmodifiers).

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

