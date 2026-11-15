[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeBalanceListResponse

A page of `PlatformFeeBalance` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PlatformFeeBalance](../models/PlatformFeeBalance.md#platformfeebalance) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PlatformFeeBalanceListResponse.md#platformfeebalancelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PlatformFeeBalanceListResponse.data[]

One partner app's platform fee balance in one currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fees Flint holds as available funds, net of the reserve. It can be negative: a fee returned after payout is owed back from your next fees. available_money plus pending_money equals the sum of amount_money over the app's balance transactions in this currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency` | Required | string | ISO 4217 currency code of every amount on the balance. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `next_payout_at` | Optional | string | The next scheduled payout run. Absent until scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `partner_app_id` | Required | string | The partner app the balance belongs to. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payouts_disabled_reason` | Optional | string | Why payouts wait. Present only when payouts_enabled is false. Can gain values. Values: `"platform_paused"`, `"merchant_payouts_unavailable"`. |
| `payouts_enabled` | Required | boolean | Whether your platform and merchant account can receive payouts. Flint deferring a run for cash safety doesn't disable payouts. |
| `pending_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fees Flint hasn't received as available funds yet, net of their reserve holds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `platform_fee_balance_id` | Required | string | Unique identifier for the balance. Example: `"pfbal_01KEZF7C005QNZBGFAR0NNPEQ4"`. |
| `reserve_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What Flint holds in your reserve now: reserve holds minus releases. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the balance last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PlatformFeeBalanceListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

