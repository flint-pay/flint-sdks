[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePaymentIntentRequestInput

The request body for: Create standalone payment intent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to request from the buyer, including any tip_money. With capture_method manual, this is the hold amount, and you can capture less of it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `customer_id` | Optional | string | Customer to link to this payment intent. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_options` | Required | Array of string | Payment options the buyer can use. Name at least one. minItems: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_return_url` | Optional | string | Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm. Required when payment_options includes affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. minLength: `1`. pattern: `\S`. |
| `receipt_email` | Optional | string | Email address for this payment's receipt. When omitted, Flint uses the customer's email. Format: `email`. minLength: `1`. maxLength: `255`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `transaction_purpose` | Optional | string | Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Values: `"goods"`, `"services"`, `"other"`. |

