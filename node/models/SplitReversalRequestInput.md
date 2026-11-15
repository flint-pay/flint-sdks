[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalRequestInput

Request input. Response: [SplitReversalRequest](../models/SplitReversalRequest.md#splitreversalrequest).

The seller amount to take back from one eligible payment split when creating a refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Positive seller amount to take back, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Positive seller amount to take back, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/SplitReversalRequestInput.md#splitreversalrequestinputamount_money). |
| `payment_split_id` | Required | string | An eligible split on a payment this refund covers. Each split may appear once. minLength: `1`. pattern: `^psplit_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. |

### SplitReversalRequestInput.amount_money

Positive seller amount to take back, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money).

