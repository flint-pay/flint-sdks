[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequestCannotCalculate

The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failure_category` | Required | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [9 declared values](#callersupplieddeliveryoutcomerequestcannotcalculate-failure_category-values). |
| `merchant_reference` | Optional | string | Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: `1`. maxLength: `500`. |
| `retryable` | Required | boolean | Whether trying again later can succeed. Send it with type `cannot_calculate`. |
| `type` | Required | string | Whether the method has a rate, is unavailable, or could not be priced. Values: `"cannot_calculate"`. |

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

