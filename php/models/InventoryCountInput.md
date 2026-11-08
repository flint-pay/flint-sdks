[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountInput

A physical count used to reconcile stock.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_count_id` | Required | string | Unique identifier for this inventory count, prefixed `invc_`. Example: `"invc_01KEZF7C00B47NXRE3ET37QQ59"`. |
| `lines` | Required | Array of [InventoryCountLineInput](../models/InventoryCountLineInput.md#inventorycountlineinput) | Count lines, one for each inventory item being counted. |
| `location_id` | Required | string | ID of the Location whose stock is counted. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `observation_provenance` | Optional | [InventoryCountObservationProvenanceInput](../models/InventoryCountObservationProvenanceInput.md#inventorycountobservationprovenanceinput) | Source system, actor, and time reported with the count's observations. Where an inventory count came from: the source system, an external actor ID, and when the event occurred. |
| `status` | Required | string | Values: `"draft"`, `"applied"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

