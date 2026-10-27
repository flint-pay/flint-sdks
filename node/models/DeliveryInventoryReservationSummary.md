[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryReservationSummary

The inventory reservation held for a delivery selection: its owner, status, expiry, and the next action required.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `inventory_reservation_id` | Required | string |  |
| `owner_type` | Required | string | Values: `"delivery_selection"`, `"payment_attempt"`, `"order_balance_hold"`. |
| `required_next_action` | Optional | string | Values: `"none"`, `"retry_payment"`, `"replace_selection"`, `"contact_merchant"`. |
| `status` | Required | string | Values: `"active"`, `"closed"`. |

