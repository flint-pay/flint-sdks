[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeResponse

A response containing `PlatformFee` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PlatformFee](../models/PlatformFee.md#platformfee) | Resource, collection, or operation result returned by this request. A platform fee your partner app charged, or asked to charge, on a payment it created for an installed merchant. Owned by the merchant that owns the partner app. `data`: [field definitions](../models/PlatformFeeResponse.md#platformfeeresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PlatformFeeResponse.data

Resource, collection, or operation result returned by this request. A platform fee your partner app charged, or asked to charge, on a payment it created for an installed merchant. Owned by the merchant that owns the partner app.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_reason` | Optional | string | Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"platform_capability_inactive"`, `"uncollectible"`. |
| `checkout_session_id` | Optional | string | The checkout session the payment came from. Absent when the fee was sent with the payment itself. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `collected_at` | Optional | string | When Flint collected the fee with the payment. Absent unless status is succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the payment's create recorded the fee. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | The installed merchant charged the fee, as on the install. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `partner_app_id` | Required | string | The partner app that charged the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Required | string | The install whose partner app token created the payment. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `payment_intent_id` | Required | string | The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `platform_fee_id` | Required | string | Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee returned to the installed merchant so far, including opted-in payment refunds and returns of the whole application fee. A failed refund reverses its share of this total. 0 when nothing has been returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requested_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee the request asked for. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reserve_available_at` | Optional | string | When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reserve_hold_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`. |
| `updated_at` | Required | string | When the fee last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### PlatformFeeResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

