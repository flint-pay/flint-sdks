[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequestAvailableInput

The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of the delivery. Send it with type `available`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Required | string | Last moment this rate can be offered in the quote. It must be later than the evaluation time plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at. Send it with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_reference` | Optional | string | Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: `1`. maxLength: `500`. |
| `offered_windows` | Conditional | Array of [DeliveryWindowRequestInput](../models/DeliveryWindowRequestInput.md#deliverywindowrequestinput) | Delivery windows the buyer can choose from. Send either `offered_windows` or both `window_start_at` and `window_end_at` with type `available`. |
| `selection_guarantee_expires_at` | Required | string | Last moment a delivery selection can lock this rate for payment. It must be at or after expires_at. Send it with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_level` | Optional | string | Buyer-visible service level of the rate. Send it with type `available`. minLength: `1`. |
| `type` | Required | string | Whether the method has a rate, is unavailable, or could not be priced. Values: `"available"`. |
| `window_end_at` | Conditional | string | End of the delivery window for this rate. When present, send it with window_start_at, including when offered_windows is supplied. Send it only with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Conditional | string | Start of the delivery window for this rate. When present, send it with window_end_at, including when offered_windows is supplied. Send it only with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

### CallerSuppliedDeliveryOutcomeRequestAvailableInput variant 1: `type` = `"available"`

anyOf variant 1.

- Condition: not (at least one(present(`unavailable_reason`); present(`failure_category`); present(`retryable`))).
- Required: `window_end_at`, `window_start_at`.
- Optional: `offered_windows`.

### CallerSuppliedDeliveryOutcomeRequestAvailableInput variant 2: `type` = `"available"`

anyOf variant 2.

- Condition: not (at least one(present(`unavailable_reason`); present(`failure_category`); present(`retryable`))).
- Required: `offered_windows`.
- Optional: `window_end_at`, `window_start_at`.
- Constraints for `offered_windows`: minItems: `1`.

