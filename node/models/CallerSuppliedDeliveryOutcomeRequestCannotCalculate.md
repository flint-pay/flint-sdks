[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequestCannotCalculate

The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `failure_category` | Required | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [9 declared values](#callersupplieddeliveryoutcomerequestcannotcalculate-failure_category-values). |
| `merchant_reference` | Optional | string | minLength: `1`. maxLength: `500`. |
| `offered_windows` | Optional | Array of [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest) | `offered_windows[]`: [field definitions](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequestoffered_windows). |
| `retryable` | Required | boolean |  |
| `selection_guarantee_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `service_level` | Optional | string | minLength: `1`. |
| `type` | Required | string | Values: `"cannot_calculate"`. |
| `unavailable_reason` | Optional | string | Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: Choose an origin or method backed by available inventory. Values: [6 declared values](#callersupplieddeliveryoutcomerequestcannotcalculate-unavailable_reason-values). |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

#### CallerSuppliedDeliveryOutcomeRequestCannotCalculate failure_category values

- `"dependency_failure"`
- `"timeout"`
- `"malformed_response"`
- `"pricing_failure"`
- `"schedule_failure"`
- `"geography_failure"`
- `"routing_failure"`
- `"address_verification_failed"`
- `"address_could_not_be_verified"`

#### CallerSuppliedDeliveryOutcomeRequestCannotCalculate unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### CallerSuppliedDeliveryOutcomeRequestCannotCalculate.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### CallerSuppliedDeliveryOutcomeRequestCannotCalculate.offered_windows[]

Field definitions: [CallerSuppliedDeliveryOutcomeRequest.offered_windows[]](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequestoffered_windows).

