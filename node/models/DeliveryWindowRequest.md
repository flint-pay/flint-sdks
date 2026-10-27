[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `delivery_window_id` | Required | string |  |
| `end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string | Format: `date-time`. |
| `start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### DeliveryWindowRequest variant 1

anyOf variant 1: Declared schema DeliveryWindowRequest. A delivery window you supply in a caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can choose it..

- Constraints for `delivery_window_id`: minLength: `1`.
- Constraints for `end_at`: minLength: `1`.
- Constraints for `expires_at`: RFC3339 timestamp. minLength: `1`.
- Constraints for `start_at`: minLength: `1`.

### DeliveryWindowRequest variant 2

anyOf variant 2: Declared schema DeliveryWindowResource. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen..

- Constraints for `expires_at`: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier.

### DeliveryWindowRequest.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

