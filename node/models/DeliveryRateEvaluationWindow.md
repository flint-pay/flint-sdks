[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationWindow

A delivery window the buyer can choose in an available rate evaluation outcome.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The price for this window, in the request's currency and within the method's fee bounds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/DeliveryRateEvaluationWindow.md#deliveryrateevaluationwindowamount_money). |
| `end_at` | Required | string | Exclusive end of the window, after start_at and within the scheduling horizon. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `selection_guarantee_expires_at` | Optional | string | How long this window's price holds once the buyer selects it. It must be after evaluated_at and no later than the outcome's selection_guarantee_expires_at, which it defaults to. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of the window, not earlier than evaluated_at. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_id` | Required | string | Your ID for the window, unique within the outcome. minLength: `1`. Example: `"evening-0802"`. |

### DeliveryRateEvaluationWindow.amount_money

The price for this window, in the request's currency and within the method's fee bounds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

