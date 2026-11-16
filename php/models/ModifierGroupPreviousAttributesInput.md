[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean or null | Whether buyers can select more than one unit of a list modifier. `allow_quantities`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesallow_quantities). |
| `created_at` | Optional | string or null | When the modifier group was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `max_quantity` | Optional | integer or null | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmax_quantity). |
| `max_selected` | Optional | integer or null | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. `max_selected`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmax_selected). |
| `max_total_quantity` | Optional | integer or null | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. `max_total_quantity`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmax_total_quantity). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this modifier group. `merchant_id`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `min_quantity` | Optional | integer or null | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmin_quantity). |
| `min_selected` | Optional | integer or null | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. `min_selected`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmin_selected). |
| `modifier_group_id` | Optional | string or null | Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. `modifier_group_id`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmodifier_group_id). |
| `modifier_group_type` | Optional | string or null | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. `modifier_group_type`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmodifier_group_type). |
| `modifiers` | Optional | Array of [ModifierPreviousAttributesInput](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinput) or null | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. `modifiers`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmodifiers). |
| `name` | Optional | string or null | Name of the modifier group shown to buyers. `name`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `show_on_fulfillment` | Optional | boolean or null | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. `show_on_fulfillment`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. `show_on_receipt`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesshow_on_receipt). |
| `status` | Optional | string or null | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `text` | Optional | [TextModifierConfigPreviousAttributesInput](../models/TextModifierConfigPreviousAttributesInput.md#textmodifierconfigpreviousattributesinput) or null | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. |
| `updated_at` | Optional | string or null | When the modifier group or its modifiers last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Version of the modifier group and its modifiers. `version`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### ModifierGroupPreviousAttributesInput.allow_quantities

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.allow_quantities](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesallow_quantities).

### ModifierGroupPreviousAttributesInput.created_at

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ModifierGroupPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ModifierGroupPreviousAttributesInput.max_quantity

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.max_quantity](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmax_quantity).

### ModifierGroupPreviousAttributesInput.max_selected

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.max_selected](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmax_selected).

### ModifierGroupPreviousAttributesInput.max_total_quantity

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.max_total_quantity](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmax_total_quantity).

### ModifierGroupPreviousAttributesInput.merchant_id

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id).

### ModifierGroupPreviousAttributesInput.min_quantity

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.min_quantity](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmin_quantity).

### ModifierGroupPreviousAttributesInput.min_selected

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.min_selected](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmin_selected).

### ModifierGroupPreviousAttributesInput.modifier_group_id

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_group_id](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmodifier_group_id).

### ModifierGroupPreviousAttributesInput.modifier_group_type

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_group_type](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmodifier_group_type).

### ModifierGroupPreviousAttributesInput.modifiers

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.modifiers](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesmodifiers).

### ModifierGroupPreviousAttributesInput.name

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.name](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesname).

### ModifierGroupPreviousAttributesInput.show_on_fulfillment

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.show_on_fulfillment](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesshow_on_fulfillment).

### ModifierGroupPreviousAttributesInput.show_on_receipt

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.show_on_receipt](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesshow_on_receipt).

### ModifierGroupPreviousAttributesInput.status

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.status](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesstatus).

### ModifierGroupPreviousAttributesInput.updated_at

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ModifierGroupPreviousAttributesInput.version

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEventInput.data.previous_attributes.version](../models/ModifierGroupArchivedInstalledMerchantsEventInput.md#modifiergrouparchivedinstalledmerchantseventinputdataprevious_attributesversion).

