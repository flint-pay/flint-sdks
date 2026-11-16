[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier set was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this modifier set. `merchant_id`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifier_groups` | Optional | Array of [ModifierSetGroupPreviousAttributesInput](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinput) or null | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_groups). |
| `modifier_set_id` | Optional | string or null | Stable identifier of the modifier set assigned to catalog items. `modifier_set_id`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Name used to identify this modifier set. `name`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `status` | Optional | string or null | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Version of the modifier set, including the groups it contains. `version`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### ModifierSetPreviousAttributesInput.created_at

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ModifierSetPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ModifierSetPreviousAttributesInput.merchant_id

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id).

### ModifierSetPreviousAttributesInput.modifier_groups

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_groups](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_groups).

### ModifierSetPreviousAttributesInput.modifier_set_id

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id).

### ModifierSetPreviousAttributesInput.name

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesname).

### ModifierSetPreviousAttributesInput.status

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesstatus).

### ModifierSetPreviousAttributesInput.updated_at

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ModifierSetPreviousAttributesInput.version

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributesversion).

