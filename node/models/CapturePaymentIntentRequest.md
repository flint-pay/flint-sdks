[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapturePaymentIntentRequest

The request body for: Capture payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Can't be combined with final_amount_money or tip_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequestamount_money). |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `final_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The bill without the tip. The capture collects final_amount_money plus tip_money in one charge. With only tip_money, the bill is the authorization minus the tip it carries; when the authorization is all tip, final_amount_money is required. Must be greater than zero, in the payment's currency. On an order's payment, it is at most the authorization minus the tip it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with maximum_money on final_amount_money. The order releases the difference. Not accepted on Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `final_amount_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequestfinal_amount_money). |
| `platform_fee` | Optional | [PlatformFeeRequest](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on this payment, set when you know the final bill and tip. Only the partner app install token that created the payment can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee the payment was created with, or adds one if it had none, after the same consent, capability and currency checks as at create: amount_money must be above zero and in the payment's currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required; in live mode the partner app's platform_fees capability must be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than refusing the capture. A payment that belongs to an order can't take it at capture: INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `splits` | Optional | Array of [SplitReversalRequest](../models/SplitReversalRequest.md#splitreversalrequest) | Final split amounts for this capture. List every split that isn't canceled, once each, with an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits can't gain them. Part of the idempotency fingerprint. minItems: `1`. maxItems: `25`. `splits[]`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequestsplits). |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tip, replacing the tip the authorization carries. Zero captures without a tip. With only final_amount_money, the tip is the one the authorization carries, or zero. At most the larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00 USD and the payment's share of the order's subtotal after discounts. Above it INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment, keeping or lowering the tip the authorization carries is never refused, and the tip becomes this payment's part of the order's tip. A payment that doesn't carry part of the order's requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequesttip_money). |

### CapturePaymentIntentRequest.amount_money

Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Can't be combined with final_amount_money or tip_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CapturePaymentIntentRequest.final_amount_money

The bill without the tip. The capture collects final_amount_money plus tip_money in one charge. With only tip_money, the bill is the authorization minus the tip it carries; when the authorization is all tip, final_amount_money is required. Must be greater than zero, in the payment's currency. On an order's payment, it is at most the authorization minus the tip it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with maximum_money on final_amount_money. The order releases the difference. Not accepted on Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CapturePaymentIntentRequest.splits[]

The final amount of an existing split at capture.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Final split amount above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Final split amount above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money). |
| `payment_split_id` | Required | string | Existing split of this payment. Include every split that isn't canceled, once each. minLength: `1`. pattern: `^psplit_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. |

### CapturePaymentIntentRequest.splits[].amount_money

Final split amount above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### CapturePaymentIntentRequest.tip_money

The tip, replacing the tip the authorization carries. Zero captures without a tip. With only final_amount_money, the tip is the one the authorization carries, or zero. At most the larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00 USD and the payment's share of the order's subtotal after discounts. Above it INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment, keeping or lowering the tip the authorization carries is never refused, and the tip becomes this payment's part of the order's tip. A payment that doesn't carry part of the order's requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

