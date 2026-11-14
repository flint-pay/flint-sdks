[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequestUnavailable

The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_reference` | Optional | string | Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: `1`. maxLength: `500`. |
| `type` | Required | string | Whether the method has a rate, is unavailable, or could not be priced. Values: `"unavailable"`. |
| `unavailable_reason` | Required | string | Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [6 declared values](#callersupplieddeliveryoutcomerequestunavailable-unavailable_reason-values). |

#### CallerSuppliedDeliveryOutcomeRequestUnavailable unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

