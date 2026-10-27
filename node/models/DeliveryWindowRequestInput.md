[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowRequestInput

Request input. Response: [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest).

A delivery window you supply in a caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can choose it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string | minLength: `1`. |
| `end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

