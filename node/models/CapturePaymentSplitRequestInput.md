[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapturePaymentSplitRequestInput

Request input. Response: [SplitReversalRequest](../models/SplitReversalRequest.md#splitreversalrequest).

The final amount of an existing split at capture.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Final split amount above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Final split amount above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CapturePaymentSplitRequestInput.md#capturepaymentsplitrequestinputamount_money). |
| `payment_split_id` | Required | string | Existing split of this payment. Include every split that isn't canceled, once each. minLength: `1`. pattern: `^psplit_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. |

### CapturePaymentSplitRequestInput.amount_money

Final split amount above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money).

