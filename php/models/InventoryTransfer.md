[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransfer

Stock moving between locations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `closed_reason` | Optional | string or null | How the transfer ended. `null` when the transfer isn't closed. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `departed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `destination_location_id` | Required | string | ID of the Location the stock goes to. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_transfer_id` | Required | string | Unique identifier for this inventory transfer, prefixed `invtr_`. |
| `lines` | Required | Array of [InventoryTransferLine](../models/InventoryTransferLine.md#inventorytransferline) | Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. `lines[]`: [field definitions](../models/InventoryTransferResponse.md#inventorytransferresponsedatalines). |
| `note` | Optional | string | Free-text note about the transfer. |
| `origin_location_id` | Required | string | ID of the Location the stock leaves. |
| `received_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### InventoryTransfer.lines[]

Field definitions: [InventoryTransferResponse.data.lines[]](../models/InventoryTransferResponse.md#inventorytransferresponsedatalines).

