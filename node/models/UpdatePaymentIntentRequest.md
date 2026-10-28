[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentIntentRequest

The request body for: Update payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payment amount. Can change only while status is requires_payment_method and before the first confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/UpdatePaymentIntentRequest.md#updatepaymentintentrequestamount_money). |
| `customer_id` | Optional | string | Customer linked to this payment intent. Can change only while status is requires_payment_method. Cannot be cleared. minLength: `1`. |
| `expected_version` | Optional | integer string | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. Omit it to keep the current value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `receipt_email` | Optional | string or null | Send null to clear it. Omit it to keep the current value. Format: `email`. minLength: `1`. maxLength: `255`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit it to keep the current value. `tip_money`: [declared alternatives](../models/UpdatePaymentIntentRequest.md#updatepaymentintentrequesttip_money). |

### UpdatePaymentIntentRequest.amount_money

Payment amount. Can change only while status is requires_payment_method and before the first confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### UpdatePaymentIntentRequest.tip_money

Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit it to keep the current value.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### UpdatePaymentIntentRequest.tip_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### UpdatePaymentIntentRequest.tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit it to keep the current value. 

