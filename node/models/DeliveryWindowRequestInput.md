[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowRequestInput

Request input. Response: [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest).

A delivery window you supply in a caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can choose it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of delivery in this window. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string | ID of this window. The buyer sends it to choose the window. minLength: `1`. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `end_at` | Required | string | End of this delivery window. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string | Last moment a delivery selection can lock this window's price. It must be later than the evaluation time and no later than the outcome's selection_guarantee_expires_at. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of this delivery window. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

