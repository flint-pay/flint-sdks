[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryReservationSummaryInput

The inventory reservation held for a delivery selection: its owner, status, and expiry.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inventory_reservation_id` | Required | string | ID of the inventory reservation holding stock for the selection. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `owner_type` | Required | string | Which kind of owner holds the reservation. Values: `"order"`. |
| `status` | Required | string | Whether the reservation is still holding stock. Values: `"active"`, `"closed"`. |

