[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequestInput

Your outcome for a caller-priced delivery method, selected by `type`: available with a price and windows, unavailable with a reason, or cannot calculate.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of the delivery. Send it with type `available`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Conditional | string | Last moment this rate can be offered in the quote. It must be later than the evaluation time plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at. Send it with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_category` | Conditional | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [9 declared values](#callersupplieddeliveryoutcomerequestinput-failure_category-values). |
| `merchant_reference` | Optional | string | Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: `1`. maxLength: `500`. |
| `offered_windows` | Conditional | Array of [DeliveryWindowRequestInput](../models/DeliveryWindowRequestInput.md#deliverywindowrequestinput) | Delivery windows the buyer can choose from. Send either `offered_windows` or both `window_start_at` and `window_end_at` with type `available`. |
| `retryable` | Conditional | boolean | Whether trying again later can succeed. Send it with type `cannot_calculate`. |
| `selection_guarantee_expires_at` | Conditional | string | Last moment a delivery selection can lock this rate for payment. It must be at or after expires_at. Send it with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_level` | Optional | string | Buyer-visible service level of the rate. Send it with type `available`. minLength: `1`. |
| `type` | Required | string | Whether the method has a rate, is unavailable, or could not be priced. Values: `"available"`, `"unavailable"`, `"cannot_calculate"`. |
| `unavailable_reason` | Conditional | string | Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [6 declared values](#callersupplieddeliveryoutcomerequestinput-unavailable_reason-values). |
| `window_end_at` | Conditional | string | End of the delivery window for this rate. When present, send it with window_start_at, including when offered_windows is supplied. Send it only with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Conditional | string | Start of the delivery window for this rate. When present, send it with window_end_at, including when offered_windows is supplied. Send it only with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

#### CallerSuppliedDeliveryOutcomeRequestInput failure_category values

- `"dependency_failure"`
- `"timeout"`
- `"malformed_response"`
- `"pricing_failure"`
- `"schedule_failure"`
- `"geography_failure"`
- `"routing_failure"`
- `"address_verification_failed"`
- `"address_could_not_be_verified"`

#### CallerSuppliedDeliveryOutcomeRequestInput unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### CallerSuppliedDeliveryOutcomeRequestInput variant 1: `type` = `"available"`

oneOf with type: "available": The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`.; anyOf variant 1.

- Condition: not (at least one(present(`unavailable_reason`); present(`failure_category`); present(`retryable`))).
- Required: `amount_money`, `expires_at`, `selection_guarantee_expires_at`, `window_end_at`, `window_start_at`.
- Optional: `failure_category`, `offered_windows`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"available"`.

### CallerSuppliedDeliveryOutcomeRequestInput variant 2: `type` = `"available"`

oneOf with type: "available": The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`.; anyOf variant 2.

- Condition: not (at least one(present(`unavailable_reason`); present(`failure_category`); present(`retryable`))).
- Required: `amount_money`, `expires_at`, `offered_windows`, `selection_guarantee_expires_at`.
- Optional: `failure_category`, `retryable`, `unavailable_reason`, `window_end_at`, `window_start_at`.
- Constraints for `offered_windows`: minItems: `1`.
- Constraints for `type`: Values: `"available"`.

### CallerSuppliedDeliveryOutcomeRequestInput variant 3: `type` = `"unavailable"`

oneOf with type: "unavailable": The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`..

- Condition: not (at least one(present(`amount_money`); present(`expires_at`); present(`selection_guarantee_expires_at`); present(`window_start_at`); present(`window_end_at`); present(`offered_windows`); present(`service_level`); present(`failure_category`); present(`retryable`))).
- Required: `unavailable_reason`.
- Optional: `amount_money`, `expires_at`, `failure_category`, `offered_windows`, `retryable`, `selection_guarantee_expires_at`, `window_end_at`, `window_start_at`.
- Constraints for `type`: Values: `"unavailable"`.

### CallerSuppliedDeliveryOutcomeRequestInput variant 4: `type` = `"cannot_calculate"`

oneOf with type: "cannot_calculate": The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`..

- Condition: not (at least one(present(`amount_money`); present(`expires_at`); present(`selection_guarantee_expires_at`); present(`window_start_at`); present(`window_end_at`); present(`offered_windows`); present(`service_level`); present(`unavailable_reason`))).
- Required: `failure_category`, `retryable`.
- Optional: `amount_money`, `expires_at`, `offered_windows`, `selection_guarantee_expires_at`, `unavailable_reason`, `window_end_at`, `window_start_at`.
- Constraints for `type`: Values: `"cannot_calculate"`.

