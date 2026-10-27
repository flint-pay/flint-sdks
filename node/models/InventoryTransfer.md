[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransfer

Stock moving between locations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `closed_reason` | Optional | string or null | Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `departed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `destination_location_id` | Required | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `idempotency_key` | Required | string |  |
| `inventory_transfer_id` | Required | string |  |
| `lines` | Required | Array of [InventoryTransferLine](../models/InventoryTransferLine.md#inventorytransferline) | Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. |
| `note` | Optional | string |  |
| `origin_location_id` | Required | string |  |
| `received_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

