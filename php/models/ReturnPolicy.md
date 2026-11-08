[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicy

Rules governing whether and how purchased items can be returned.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_return_policy_revision_id` | Required | string | ID of the revision Flint judges new requests by. |
| `current_revision` | Optional | [ReturnPolicyRevision](../models/ReturnPolicyRevision.md#returnpolicyrevision) or null | Present only when `expand` includes `current_revision`; `null` when expanded and there is no related return policy revision. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Name of the policy. |
| `return_policy_id` | Required | string | Unique identifier for this return policy, prefixed `rpol_`. |
| `status` | Required | string | active policies apply to new Returns; inactive policies do not. Toggle active and inactive with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. |

### ReturnPolicy.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

