[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequest

Your outcome for a caller-priced delivery method, selected by `type`: available with a price and windows, unavailable with a reason, or cannot calculate.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `expires_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `failure_category` | Conditional | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [9 declared values](#callersupplieddeliveryoutcomerequest-failure_category-values). |
| `merchant_reference` | Optional | string | minLength: `1`. maxLength: `500`. |
| `offered_windows` | Optional | Array of [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest) | `offered_windows[]`: [field definitions](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequestoffered_windows). |
| `retryable` | Conditional | boolean |  |
| `selection_guarantee_expires_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `service_level` | Optional | string | minLength: `1`. |
| `type` | Required | string | Values: `"available"`, `"unavailable"`, `"cannot_calculate"`. |
| `unavailable_reason` | Conditional | string | Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: Choose an origin or method backed by available inventory. Values: [6 declared values](#callersupplieddeliveryoutcomerequest-unavailable_reason-values). |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

#### CallerSuppliedDeliveryOutcomeRequest failure_category values

- `"dependency_failure"`
- `"timeout"`
- `"malformed_response"`
- `"pricing_failure"`
- `"schedule_failure"`
- `"geography_failure"`
- `"routing_failure"`
- `"address_verification_failed"`
- `"address_could_not_be_verified"`

#### CallerSuppliedDeliveryOutcomeRequest unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### CallerSuppliedDeliveryOutcomeRequest variant 1: `type` = `"available"`

oneOf with type: "available": The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`..

- Required: `amount_money`, `expires_at`, `selection_guarantee_expires_at`.
- Optional: `failure_category`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"available"`.

### CallerSuppliedDeliveryOutcomeRequest variant 2: `type` = `"unavailable"`

oneOf with type: "unavailable": The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`..

- Required: `unavailable_reason`.
- Optional: `amount_money`, `expires_at`, `failure_category`, `retryable`, `selection_guarantee_expires_at`.
- Constraints for `type`: Values: `"unavailable"`.

### CallerSuppliedDeliveryOutcomeRequest variant 3: `type` = `"cannot_calculate"`

oneOf with type: "cannot_calculate": The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`..

- Required: `failure_category`, `retryable`.
- Optional: `amount_money`, `expires_at`, `selection_guarantee_expires_at`, `unavailable_reason`.
- Constraints for `type`: Values: `"cannot_calculate"`.

### CallerSuppliedDeliveryOutcomeRequest.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### CallerSuppliedDeliveryOutcomeRequest.offered_windows[]

A delivery window you supply in a caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can choose it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `delivery_window_id` | Required | string | minLength: `1`. |
| `end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

### CallerSuppliedDeliveryOutcomeRequest.offered_windows[].amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

