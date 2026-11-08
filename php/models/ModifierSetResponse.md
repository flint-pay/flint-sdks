[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetResponse

A response containing `ModifierSet` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ModifierSet](../models/ModifierSet.md#modifierset) | The modifier set returned by this operation. A reusable collection of customization groups. `data`: [field definitions](../models/ModifierSetResponse.md#modifiersetresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/ModifierGroupResponse.md#modifiergroupresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ModifierSetResponse.data

The modifier set returned by this operation. A reusable collection of customization groups.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `modifier_groups` | Required | Array of [ModifierSetGroup](../models/ModifierSetGroup.md#modifiersetgroup) | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups[]`: [field definitions](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groups). |
| `modifier_set_id` | Required | string | Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Name used to identify this modifier set. |
| `status` | Required | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Version of the modifier set, including the groups it contains. Format: `uint64`. minimum: `1`. |

### ModifierSetResponse.data.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### ModifierSetResponse.data.modifier_groups[]

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groups).

### ModifierSetResponse.meta

Field definitions: [ModifierGroupResponse.meta](../models/ModifierGroupResponse.md#modifiergroupresponsemeta).

