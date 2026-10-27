[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateInputRequirementsItemConstraintOfferedWindowsItem

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateInputRequirementsItemConstraintOfferedWindowsItemAmountMoney](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateInputRequirementsItemConstraintOfferedWindowsItemAmountMoney.md#deliverypreviewchoicegroupresourcecandidateoutcomesvaluecannotcalculateinputrequirementsitemconstraintofferedwindowsitemamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_window_id` | Required | string |  |
| `end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. |
| `start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

