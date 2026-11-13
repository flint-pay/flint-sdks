[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowResourceInput

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of delivery in this window. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string | ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `end_at` | Required | string | End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

