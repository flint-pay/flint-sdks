[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePaymentIntentRequest

The request body for: Create standalone payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to request from the buyer, including any tip_money. With capture_method manual, this is the hold amount, and you can capture less of it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreatePaymentIntentRequest.md#createpaymentintentrequestamount_money). |
| `capture_method` | Optional | string | automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `customer_id` | Optional | string | Customer to link to this payment intent. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `payment_options` | Required | Array of string | Payment options the buyer can use. Name at least one. card_present must be the only option; confirm it with a reader credential. payment_return_url is not accepted with card_present. minItems: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_return_url` | Optional | string | Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. Required when payment_options includes affirm and no checkout session collects the payment. Not accepted with card_present. minLength: `1`. pattern: `\S`. |
| `platform_fee` | Optional | [PlatformFeeRequest](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on this payment, checked against amount_money. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `receipt_email` | Optional | string | Email address for this payment's receipt. When omitted, Flint uses the customer's email. Format: `email`. minLength: `1`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `request_overcapture` | Optional | boolean | Let one capture collect more than the authorization where the card network allows it, for example a final bill plus a tip. Needs capture_method manual and payment_options limited to card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED on request_overcapture. Card networks allow overcapture only where the final amount isn't known at authorization, such as tips and services, and you're responsible for following their rules. overcapture reports what the processor allows once the payment is authorized. Default: `false`. |
| `splits` | Optional | Array of [PaymentSplitRequest](../models/PaymentSplitRequest.md#paymentsplitrequest) | Divide this payment's funds between the collecting merchant and sellers; this is separate from split tender, where a buyer uses several payment methods. Only the collecting merchant's own credentials can send splits. Each install must belong to the same app owned by the collecting merchant, with the seller's approval in this mode and readiness to receive payouts. Test mode needs no platform review; live mode requires the app's active payment_splits capability and Flint support for the collecting account. Can't be combined with platform_fee or saved payment credentials. The total must fit after the largest Flint fee for the offered payment options, leaving one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after create, except capture's final amounts. Part of the idempotency fingerprint. minItems: `1`. maxItems: `25`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/CreatePaymentIntentRequest.md#createpaymentintentrequesttip_money). |
| `transaction_purpose` | Optional | string | Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Values: `"goods"`, `"services"`, `"other"`. |

### CreatePaymentIntentRequest.amount_money

Amount to request from the buyer, including any tip_money. With capture_method manual, this is the hold amount, and you can capture less of it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreatePaymentIntentRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreatePaymentIntentRequest.tip_money

Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

