[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money), [field definitions](../models/CreateRefundRequest.md#createrefundrequestsplit_reversalsamount_money). |
| `payment_split_id` | Required | string | minLength: `1`. pattern: `^psplit_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. |

### SplitReversalRequest variant 1

anyOf variant 1: Declared schema CapturePaymentSplitRequest. The final amount of an existing split at capture..

- Constraints for `amount_money`: Final split amount above zero, in the payment's currency.
- Constraints for `payment_split_id`: Existing split of this payment. Include every split that isn't canceled, once each.

### SplitReversalRequest variant 2

anyOf variant 2: Declared schema SplitReversalRequest. The seller amount to take back from one eligible payment split when creating a refund..

- Constraints for `amount_money`: Positive seller amount to take back, in the payment's currency.
- Constraints for `payment_split_id`: An eligible split on a payment this refund covers. Each split may appear once.

### SplitReversalRequest variant 1.amount_money

Field definitions: [CapturePaymentIntentRequest.splits[].amount_money](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money).

### SplitReversalRequest variant 2.amount_money

Field definitions: [CreateRefundRequest.split_reversals[].amount_money](../models/CreateRefundRequest.md#createrefundrequestsplit_reversalsamount_money).

