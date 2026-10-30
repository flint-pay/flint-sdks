[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetInput

A reusable collection of customization groups.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this modifier set. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `modifier_groups` | Required | Array of [ModifierSetGroupInput](../models/ModifierSetGroupInput.md#modifiersetgroupinput) | Ordered group entries in this set, including references to reusable groups and groups owned by the set. |
| `modifier_set_id` | Required | string | Stable identifier of the modifier set assigned to catalog items. |
| `name` | Required | string | Name used to identify this modifier set. |
| `status` | Required | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When the modifier set, its group entries, or its inline groups last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Version of the modifier set, its group entries, and its inline groups. Send it as expected_version when replacing modifier_groups. Format: `uint64`. minimum: `1`. |

