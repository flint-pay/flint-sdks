[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputConstraint

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string | Values the input must be one of. |
| `earliest_at` | Optional | string | Earliest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `format` | Optional | string | Format the input must follow. |
| `latest_at` | Optional | string | Latest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `maximum_length` | Optional | integer | Most characters the input can have. Format: `int32`. |
| `minimum_length` | Optional | integer | Fewest characters the input can have. Format: `int32`. |
| `offered_windows` | Optional | Array of [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest) | Delivery windows the buyer can choose from. `offered_windows[]`: [field definitions](../models/DeliveryInputConstraint.md#deliveryinputconstraintoffered_windows). |
| `supported_countries` | Optional | Array of string | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. |
| `type` | Required | string | Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. |

### DeliveryInputConstraint.offered_windows[]

A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of delivery in this window. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest-variant-1offered_windowsamount_money). |
| `delivery_window_id` | Required | string | ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `end_at` | Required | string | End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `start_at` | Required | string | Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### DeliveryInputConstraint.offered_windows[].amount_money

Field definitions: [CallerSuppliedDeliveryOutcomeRequest variant 1.offered_windows[].amount_money](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest-variant-1offered_windowsamount_money).

