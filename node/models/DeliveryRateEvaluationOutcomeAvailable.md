[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationOutcomeAvailable

A method's outcome in a delivery rate evaluation response, selected by `type`: available with a price and delivery window, unavailable with a reason, or cannot calculate.

The `available` outcome: you can deliver for amount_money, within the delivery window or one of offered_windows.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The price in the request's currency, within the method's minimum_fee_currency_options and maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's price. Send it with type available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/DeliveryRateEvaluationOutcome.md#deliveryrateevaluationoutcomeamount_money). |
| `expires_at` | Required | string | When the price stops being offered. It must be later than evaluated_at plus the method's minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with type available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_category` | Optional | string | Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the callback_ categories for failures it detects. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [9 declared values](#deliveryrateevaluationoutcomeavailable-failure_category-values). |
| `merchant_reference` | Optional | string | Your private reference for the rate, such as a carrier rate ID, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength: `500`. pattern: `^(?:\S(?:[\s\S]*\S)?)?$`. |
| `offered_windows` | Optional | Array of [DeliveryRateEvaluationWindow](../models/DeliveryRateEvaluationWindow.md#deliveryrateevaluationwindow) | Delivery windows the buyer can choose from, without overlaps. Send it with type available. maxItems: `50`. |
| `retryable` | Optional | boolean | Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false. |
| `selection_guarantee_expires_at` | Required | string | How long the price holds once the buyer selects it. It must not be earlier than expires_at, and Flint holds a selection for at most 24 hours. Send it with type available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_level` | Optional | string | Replaces the method's configured service level for this option: `economy`, `standard`, `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`, `same_day`, or `scheduled` for local delivery. Send it with type available. |
| `type` | Required | string | The outcome type, which selects the fields the outcome carries. Values: `"available"`. |
| `unavailable_reason` | Optional | string | Why you don't offer the method for this request. Send it with type unavailable. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [6 declared values](#deliveryrateevaluationoutcomeavailable-unavailable_reason-values). |
| `window_end_at` | Optional | string | Exclusive end of the delivery window, after window_start_at and within 366 days, or within the method's scheduling horizon for a schedule_window estimate. With offered_windows, it must equal the last window's end_at when present. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | Start of the delivery window, not earlier than evaluated_at. Required with window_end_at unless offered_windows is sent, in which case it must equal the first window's start_at when present. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### DeliveryRateEvaluationOutcomeAvailable failure_category values

- `"dependency_failure"`
- `"timeout"`
- `"malformed_response"`
- `"pricing_failure"`
- `"schedule_failure"`
- `"geography_failure"`
- `"routing_failure"`
- `"address_verification_failed"`
- `"address_could_not_be_verified"`

#### DeliveryRateEvaluationOutcomeAvailable unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### DeliveryRateEvaluationOutcomeAvailable.amount_money

Field definitions: [DeliveryRateEvaluationOutcome.amount_money](../models/DeliveryRateEvaluationOutcome.md#deliveryrateevaluationoutcomeamount_money).

