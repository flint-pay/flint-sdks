[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookSnapshotInventoryTransferInput

Stock moving between locations.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Optional | string or null | How the transfer ended. `null` when the transfer isn't closed. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `departed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `destination_location_id` | Required | string | ID of the Location the stock goes to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inventory_transfer_id` | Required | string | Unique identifier for this inventory transfer, prefixed `invtr_`. Example: `"invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP"`. |
| `lines` | Required | Array of [InventoryTransferLineInput](../models/InventoryTransferLineInput.md#inventorytransferlineinput) | Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. |
| `note` | Optional | string | Free-text note about the transfer. |
| `origin_location_id` | Required | string | ID of the Location the stock leaves. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `received_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

