[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCount

A physical count used to reconcile stock.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_count_id` | Required | string | Unique identifier for this inventory count, prefixed `invc_`. |
| `lines` | Required | Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline) | Count lines, one for each inventory item being counted. `lines[]`: [field definitions](../models/InventoryCountResponse.md#inventorycountresponsedatalines). |
| `location_id` | Required | string | ID of the Location whose stock is counted. |
| `observation_provenance` | Optional | [InventoryCountObservationProvenance](../models/InventoryCountObservationProvenance.md#inventorycountobservationprovenance) | Source system, actor, and time reported with the count's observations. Where an inventory count came from: the source system, an external actor ID, and when the event occurred. `observation_provenance`: [field definitions](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenance). |
| `status` | Required | string | Values: `"draft"`, `"applied"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### InventoryCount.lines[]

Field definitions: [InventoryCountResponse.data.lines[]](../models/InventoryCountResponse.md#inventorycountresponsedatalines).

### InventoryCount.observation_provenance

Field definitions: [InventoryCountResponse.data.observation_provenance](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenance).

