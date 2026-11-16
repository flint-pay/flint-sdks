[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier set was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this modifier set. `merchant_id`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_groups` | Optional | Array of [ModifierSetGroup](../models/ModifierSetGroup.md#modifiersetgroup) or null | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups). |
| `modifier_set_id` | Optional | string or null | Stable identifier of the modifier set assigned to catalog items. `modifier_set_id`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Name used to identify this modifier set. `name`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesname). |
| `status` | Optional | string or null | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Version of the modifier set, including the groups it contains. `version`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesversion). |

### ModifierSetArchivedMerchantEventDataPreviousAttributes.created_at

### ModifierSetArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the modifier set was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier set was created, as an RFC3339 timestamp. When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set was created, as an RFC3339 timestamp. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.merchant_id

### ModifierSetArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier set..

- Value shape: string. Identifier of the merchant that owns this modifier set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1

anyOf variant 1: Ordered group entries in this set, including the full content of reusable groups and groups owned by the set..

- Value shape: Array of [ModifierSetGroup](../models/ModifierSetGroup.md#modifiersetgroup). Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 2

anyOf variant 2.

- Value shape: null. Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groups).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_set_id

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 1

anyOf variant 1: Stable identifier of the modifier set assigned to catalog items..

- Value shape: string. Stable identifier of the modifier set assigned to catalog items. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier set assigned to catalog items. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.name

### ModifierSetArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Name used to identify this modifier set..

- Value shape: string. Name used to identify this modifier set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name used to identify this modifier set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.status

### ModifierSetArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited..

- Value shape: string. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierSetArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.updated_at

### ModifierSetArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the modifier set or any group it contains last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.version

### ModifierSetArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Version of the modifier set, including the groups it contains..

- Value shape: integer. Version of the modifier set, including the groups it contains. Version of the modifier set, including the groups it contains. Format: `uint64`. minimum: `1`. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Version of the modifier set, including the groups it contains. 

