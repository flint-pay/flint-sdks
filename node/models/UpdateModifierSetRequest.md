[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateModifierSetRequest

The request body for: Update modifier set.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Modifier set version last read by the caller. Required when modifier_groups is present. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. Map values: minLength: `1`. |
| `modifier_groups` | Optional | Array of [ModifierSetGroupRequest](../models/ModifierSetGroupRequest.md#modifiersetgrouprequest) | Replaces the set's group entries atomically. Include modifier_set_group_id to retain an entry or omit it to create one. Entries omitted from the array are removed. Omit the array to leave entries unchanged; send [] to clear them. |
| `name` | Optional | string | Name used to identify this modifier set. minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`. |

