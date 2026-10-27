[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyRevisionResponse

A response containing `InventoryAllocationPolicyRevision` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAllocationPolicyRevision](../models/InventoryAllocationPolicyRevision.md#inventoryallocationpolicyrevision) | An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

