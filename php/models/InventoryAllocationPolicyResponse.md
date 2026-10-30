[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyResponse

A response containing `InventoryAllocationPolicy` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy) | Named, version-fenced rules that decide which Locations serve demand and in what order. `data`: [field definitions](../models/InventoryAllocationPolicyResponse.md#inventoryallocationpolicyresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAllocationPolicyResponse.data

Named, version-fenced rules that decide which Locations serve demand and in what order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object | `configuration`: [field definitions](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_inventory_allocation_policy_revision_id` | Required | string | The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_allocation_policy_id` | Required | string |  |
| `metadata` | Required | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata). |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

### InventoryAllocationPolicyResponse.data.configuration

Field definitions: [InventoryAllocationPolicyConfiguration](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration).

### InventoryAllocationPolicyResponse.data.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

