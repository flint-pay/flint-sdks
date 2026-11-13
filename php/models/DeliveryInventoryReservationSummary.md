[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryReservationSummary

The inventory reservation held for a delivery selection: its owner, status, and expiry.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `inventory_reservation_id` | Required | string | ID of the inventory reservation holding stock for the selection. |
| `owner_type` | Required | string | Which kind of owner holds the reservation. Values: `"order"`. |
| `status` | Required | string | Whether the reservation is still holding stock. Values: `"active"`, `"closed"`. |

