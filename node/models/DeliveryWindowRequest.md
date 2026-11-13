[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of delivery in this window. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest-variant-1offered_windowsamount_money). |
| `delivery_window_id` | Required | string | ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `end_at` | Required | string | End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### DeliveryWindowRequest variant 1

anyOf variant 1: Declared schema DeliveryWindowRequest. A delivery window you supply in a caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can choose it..

- Constraints for `delivery_window_id`: minLength: `1`.
- Constraints for `end_at`: minLength: `1`.
- Constraints for `expires_at`: Last moment a delivery selection can lock this window's price. It must be later than the evaluation time and no later than the outcome's selection_guarantee_expires_at. minLength: `1`.
- Constraints for `start_at`: minLength: `1`.

### DeliveryWindowRequest variant 2

anyOf variant 2: Declared schema DeliveryWindowResource. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen..

- Constraints for `expires_at`: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier.

### DeliveryWindowRequest.amount_money

Field definitions: [CallerSuppliedDeliveryOutcomeRequest variant 1.offered_windows[].amount_money](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest-variant-1offered_windowsamount_money).

