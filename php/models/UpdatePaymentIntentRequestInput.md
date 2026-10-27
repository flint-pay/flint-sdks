[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentIntentRequestInput

The request body for: Update payment intent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Payment amount. Can change only while status is requires_payment_method and before the first confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_id` | Optional | string | Customer linked to this payment intent. Can change only while status is requires_payment_method. Cannot be cleared. minLength: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. Omit it to keep the current value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `receipt_email` | Optional | string or null | Send null to clear it. Omit it to keep the current value. Format: `email`. minLength: `1`. maxLength: `255`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit it to keep the current value. |

