[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier set was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this modifier set. `merchant_id`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_groups` | Optional | Array of [ModifierSetGroupPreviousAttributes](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributes) or null | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesmodifier_groups). |
| `modifier_set_id` | Optional | string or null | Stable identifier of the modifier set assigned to catalog items. `modifier_set_id`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Name used to identify this modifier set. `name`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesname). |
| `status` | Optional | string or null | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Version of the modifier set, including the groups it contains. `version`: [declared alternatives](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesversion). |

### ModifierSetPreviousAttributes.created_at

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributescreated_at).

### ModifierSetPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ModifierSetPreviousAttributes.merchant_id

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesmerchant_id).

### ModifierSetPreviousAttributes.metadata

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata).

### ModifierSetPreviousAttributes.modifier_groups

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_groups](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesmodifier_groups).

### ModifierSetPreviousAttributes.modifier_set_id

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesmodifier_set_id).

### ModifierSetPreviousAttributes.name

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.name](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesname).

### ModifierSetPreviousAttributes.status

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.status](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesstatus).

### ModifierSetPreviousAttributes.updated_at

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesupdated_at).

### ModifierSetPreviousAttributes.version

Declared alternatives: [ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.version](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributesversion).

