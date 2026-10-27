[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPoliciesCreateResponse201

A response containing `InventoryAllocationPolicy` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAllocationPolicy](../models/InventoryAllocationPolicy.md#inventoryallocationpolicy) | Named, version-fenced rules that decide which Locations serve demand and in what order. `data`: [field definitions](../models/InventoryAllocationPoliciesCreateResponse201.md#inventoryallocationpoliciescreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAllocationPoliciesCreateResponse201.data

Named, version-fenced rules that decide which Locations serve demand and in what order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object | `configuration`: [field definitions](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_inventory_allocation_policy_revision_id` | Required | string | The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_allocation_policy_id` | Required | string |  |
| `metadata` | Required | Map of string |  |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

### InventoryAllocationPoliciesCreateResponse201.data.configuration

Field definitions: [InventoryAllocationPolicyConfiguration](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration).

