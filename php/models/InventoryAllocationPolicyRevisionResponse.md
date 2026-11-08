[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyRevisionResponse

A response containing `InventoryAllocationPolicyRevision` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAllocationPolicyRevision](../models/InventoryAllocationPolicyRevision.md#inventoryallocationpolicyrevision) | Resource, collection, or operation result returned by this request. An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits. `data`: [field definitions](../models/InventoryAllocationPolicyRevisionResponse.md#inventoryallocationpolicyrevisionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAllocationPolicyRevisionResponse.data

Resource, collection, or operation result returned by this request. An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValue](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inventory_allocation_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Required | string | Unique identifier for this inventory allocation policy revision, prefixed `invpv_`. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |

### InventoryAllocationPolicyRevisionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

