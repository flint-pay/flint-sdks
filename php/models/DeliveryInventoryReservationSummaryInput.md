[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryReservationSummaryInput

The inventory reservation held for a delivery selection: its owner, status, expiry, and the next action required.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inventory_reservation_id` | Required | string | Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `owner_type` | Required | string | Values: `"delivery_selection"`, `"payment_attempt"`, `"order_balance_hold"`. |
| `required_next_action` | Optional | string | Values: `"none"`, `"retry_payment"`, `"replace_selection"`, `"contact_merchant"`. |
| `status` | Required | string | Values: `"active"`, `"closed"`. |

