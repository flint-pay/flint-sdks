[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookSnapshotInventoryCount

A physical count used to reconcile stock.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inventory_count_id` | Required | string | Unique identifier for this inventory count, prefixed `invc_`. Example: `"invc_01KEZF7C00B47NXRE3ET37QQ59"`. |
| `lines` | Required | Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline) | Count lines, one for each inventory item being counted. |
| `location_id` | Required | string | ID of the Location whose stock is counted. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `observation_provenance` | Optional | [InventoryCountObservationProvenance](../models/InventoryCountObservationProvenance.md#inventorycountobservationprovenance) | Source system, actor, and time reported with the count's observations. Where an inventory count came from: the source system, an external actor ID, and when the event occurred. |
| `status` | Required | string | Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

