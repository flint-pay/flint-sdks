[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the modifier set was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this modifier set. `merchant_id`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `modifier_groups` | Optional | Array of [ModifierSetGroupPreviousAttributes](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributes) or null | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups). |
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

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1

anyOf variant 1: Ordered group entries in this set, including the full content of reusable groups and groups owned by the set..

- Value shape: Array of [ModifierSetGroupPreviousAttributes](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributes). Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 2

anyOf variant 2.

- Value shape: null. Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string or null | Overrides the group's name for this set. Omit it to use the group's name. `display_name`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesdisplay_name). |
| `max_selected` | Optional | integer or null | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. `max_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmax_selected). |
| `min_selected` | Optional | integer or null | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. `min_selected`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmin_selected). |
| `modifier_group` | Optional | Alternative shapes (see declared variants) | Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. `modifier_group`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group). |
| `modifier_group_id` | Optional | string or null | Stable identifier of the group contained in this entry, for either source. `modifier_group_id`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups-variant-1-fields-1modifier_group_id). |
| `modifier_overrides` | Optional | Array of [ModifierOverridePreviousAttributes](../models/ModifierOverridePreviousAttributes.md#modifieroverridepreviousattributes) or null | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. `modifier_overrides`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_overrides). |
| `modifier_set_group_id` | Optional | string or null | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. `modifier_set_group_id`: [declared alternatives](../models/ModifierSetArchivedMerchantEventDataPreviousAttributes.md#modifiersetarchivedmerchanteventdatapreviousattributesmodifier_groups-variant-1-fields-1modifier_set_group_id). |
| `position` | Optional | integer or null | Display position of this group within the set; lower values appear first. `position`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesposition). |
| `required` | Optional | boolean or null | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. `required`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesrequired). |
| `show_on_fulfillment` | Optional | boolean or null | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. `show_on_fulfillment`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. `show_on_receipt`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesshow_on_receipt). |
| `source` | Optional | string or null | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`. `source`: [declared alternatives](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributessource). |

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.display_name

Declared alternatives: [ModifierSetGroupPreviousAttributes.display_name](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesdisplay_name).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.max_selected

Declared alternatives: [ModifierSetGroupPreviousAttributes.max_selected](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmax_selected).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.min_selected

Declared alternatives: [ModifierSetGroupPreviousAttributes.min_selected](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmin_selected).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_group

Declared alternatives: [ModifierSetGroupPreviousAttributes.modifier_group](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_group).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_group_id

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the group contained in this entry, for either source..

- Value shape: string. Stable identifier of the group contained in this entry, for either source. Stable identifier of the group contained in this entry, for either source. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the group contained in this entry, for either source. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_overrides

Declared alternatives: [ModifierSetGroupPreviousAttributes.modifier_overrides](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesmodifier_overrides).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_set_group_id

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_set_group_id variant 1

anyOf variant 1: Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one..

- Value shape: string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Example: `"msg_01KEZF7C008GXTVA2AQ1SRFGFC"`. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.modifier_set_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. 

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.position

Declared alternatives: [ModifierSetGroupPreviousAttributes.position](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesposition).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.required

Declared alternatives: [ModifierSetGroupPreviousAttributes.required](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesrequired).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.show_on_fulfillment

Declared alternatives: [ModifierSetGroupPreviousAttributes.show_on_fulfillment](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesshow_on_fulfillment).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.show_on_receipt

Declared alternatives: [ModifierSetGroupPreviousAttributes.show_on_receipt](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributesshow_on_receipt).

### ModifierSetArchivedMerchantEventDataPreviousAttributes.modifier_groups variant 1.[] fields 1.source

Declared alternatives: [ModifierSetGroupPreviousAttributes.source](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributessource).

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

