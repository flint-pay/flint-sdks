[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferInput

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
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_transfer_id` | Required | string | Unique identifier for this inventory transfer, prefixed `invtr_`. Example: `"invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP"`. |
| `lines` | Required | Array of [InventoryTransferLineInput](../models/InventoryTransferLineInput.md#inventorytransferlineinput) | Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. |
| `note` | Optional | string | Free-text note about the transfer. |
| `origin_location_id` | Required | string | ID of the Location the stock leaves. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `received_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

