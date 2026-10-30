[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyInput

Rules governing whether and how purchased items can be returned.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_return_policy_revision_id` | Required | string |  |
| `current_revision` | Optional | [ReturnPolicyRevisionInput](../models/ReturnPolicyRevisionInput.md#returnpolicyrevisioninput) or null | Present only when `expand` includes `current_revision`; `null` when expanded and there is no related return policy revision. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string |  |
| `return_policy_id` | Required | string |  |
| `status` | Required | string | active policies apply to new Returns; inactive policies do not. Toggle active and inactive with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. minimum: `0`. |

