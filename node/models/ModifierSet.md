[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSet

A reusable collection of customization groups.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemmetadata). |
| `modifier_groups` | Required | Array of [ModifierSetGroup](../models/ModifierSetGroup.md#modifiersetgroup) | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. |
| `modifier_set_id` | Required | string | Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Name used to identify this modifier set. |
| `status` | Required | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Version of the modifier set, including the groups it contains. Format: `uint64`. minimum: `1`. |

### ModifierSet.metadata

Field definitions: [CreateOrderLineItem.metadata](../models/CreateOrderLineItem.md#createorderlineitemmetadata).

