[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyResponse

A response containing `InventoryAllocationPolicy` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy) | Resource, collection, or operation result returned by this request. Named, version-fenced rules that decide which Locations serve demand and in what order. `data`: [field definitions](../models/InventoryAllocationPolicyResponse.md#inventoryallocationpolicyresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAllocationPolicyResponse.data

Resource, collection, or operation result returned by this request. Named, version-fenced rules that decide which Locations serve demand and in what order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object | Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. `configuration`: [field definitions](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_inventory_allocation_policy_revision_id` | Required | string | The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_allocation_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Merchant-facing policy name. |
| `status` | Required | string | Current allocation policy status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### InventoryAllocationPolicyResponse.data.configuration

Field definitions: [InventoryAllocationPolicyConfiguration](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration).

### InventoryAllocationPolicyResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### InventoryAllocationPolicyResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

