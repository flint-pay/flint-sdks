[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryOutcomeRequestAvailable

The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of the delivery. Send it with type `available`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequestamount_money). |
| `expires_at` | Required | string | Last moment this rate can be offered in the quote. It must be later than the evaluation time plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at. Send it with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_reference` | Optional | string | Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: `1`. maxLength: `500`. |
| `offered_windows` | Conditional | Array of [DeliveryWindowRequest](../models/DeliveryWindowRequest.md#deliverywindowrequest) | Delivery windows the buyer can choose from. Send either `offered_windows` or both `window_start_at` and `window_end_at` with type `available`. `offered_windows[]`: [field definitions](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest-variant-1offered_windows). |
| `selection_guarantee_expires_at` | Required | string | Last moment a delivery selection can lock this rate for payment. It must be at or after expires_at. Send it with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_level` | Optional | string | Buyer-visible service level of the rate. Send it with type `available`. minLength: `1`. |
| `type` | Required | string | Whether the method has a rate, is unavailable, or could not be priced. Values: `"available"`. |
| `window_end_at` | Conditional | string | End of the delivery window for this rate. When present, send it with window_start_at, including when offered_windows is supplied. Send it only with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Conditional | string | Start of the delivery window for this rate. When present, send it with window_end_at, including when offered_windows is supplied. Send it only with type available. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

### CallerSuppliedDeliveryOutcomeRequestAvailable variant 1: `type` = `"available"`

anyOf variant 1.

- Condition: not (at least one(present(`unavailable_reason`); present(`failure_category`); present(`retryable`))).
- Required: `window_end_at`, `window_start_at`.
- Optional: `offered_windows`.

### CallerSuppliedDeliveryOutcomeRequestAvailable variant 2: `type` = `"available"`

anyOf variant 2.

- Condition: not (at least one(present(`unavailable_reason`); present(`failure_category`); present(`retryable`))).
- Required: `offered_windows`.
- Optional: `window_end_at`, `window_start_at`.
- Constraints for `offered_windows`: minItems: `1`.

### CallerSuppliedDeliveryOutcomeRequestAvailable.amount_money

Field definitions: [CallerSuppliedDeliveryOutcomeRequest.amount_money](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequestamount_money).

### CallerSuppliedDeliveryOutcomeRequestAvailable variant 1.offered_windows[]

Field definitions: [CallerSuppliedDeliveryOutcomeRequest variant 1.offered_windows[]](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest-variant-1offered_windows).

