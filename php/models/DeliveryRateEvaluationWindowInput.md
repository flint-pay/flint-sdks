[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationWindowInput

A delivery window the buyer can choose in an available rate evaluation outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The price for this window, in the request's currency and within the method's fee bounds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `end_at` | Required | string | Exclusive end of the window, after start_at and within the scheduling horizon. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `selection_guarantee_expires_at` | Optional | string | How long this window's price holds once the buyer selects it. It must be after evaluated_at and no later than the outcome's selection_guarantee_expires_at, which it defaults to. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of the window, not earlier than evaluated_at. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_id` | Required | string | Your ID for the window, unique within the outcome. minLength: `1`. Example: `"evening-0802"`. |

