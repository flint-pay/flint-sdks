[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCanceledEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_reason` | Optional | string | Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"platform_capability_inactive"`, `"uncollectible"`. |
| `checkout_session_id` | Optional | string | The checkout session the payment came from. Absent when the fee was sent with the payment itself. |
| `collected_at` | Optional | string | When Flint collected the fee with the payment. Absent unless status is succeeded. Format: `date-time`. |
| `created_at` | Required | string | When the payment's create recorded the fee. Format: `date-time`. |
| `merchant_id` | Required | string | The installed merchant charged the fee, as on the install. |
| `partner_app_id` | Required | string | The partner app that charged the fee. |
| `partner_app_install_id` | Required | string | The install whose partner app token created the payment. |
| `payment_intent_id` | Required | string | The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. |
| `platform_fee_id` | Required | string | Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee returned to the installed merchant so far, including opted-in payment refunds and returns of the whole application fee. A failed refund reverses its share of this total. 0 when nothing has been returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requested_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee the request asked for. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reserve_available_at` | Optional | string | When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: `date-time`. |
| `reserve_hold_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`. |
| `updated_at` | Required | string | When the fee last changed. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

