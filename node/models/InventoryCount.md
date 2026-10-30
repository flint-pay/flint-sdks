[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCount

A physical count used to reconcile stock.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_count_id` | Required | string |  |
| `lines` | Required | Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline) |  |
| `location_id` | Required | string |  |
| `observation_provenance` | Optional | [InventoryCountObservationProvenance](../models/InventoryCountObservationProvenance.md#inventorycountobservationprovenance) | Where an inventory count came from: the source system, an external actor ID, and when the event occurred. |
| `status` | Required | string | Values: `"draft"`, `"applied"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

