[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionOfferedWindowsItem

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionOfferedWindowsItemAmountMoney](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionOfferedWindowsItemAmountMoney.md#deliverypreviewchoicegroupresourcecandidateoutcomesvaluerequirescheckoutcontextoptionofferedwindowsitemamountmoney) | Price of delivery in this window. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string | ID of this window. The buyer sends it to choose the window. |
| `end_at` | Required | string | End of this delivery window. Format: `date-time`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. |
| `start_at` | Required | string | Start of this delivery window. Format: `date-time`. |

