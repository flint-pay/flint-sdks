[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceListResponse

A list of `Balance` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Balance](../models/Balance.md#balance) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BalanceListResponse.md#balancelistresponsedata). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. `meta`: [field definitions](../models/BalanceListResponse.md#balancelistresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BalanceListResponse.data[]

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. |
| `available_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_id` | Required | string | Stable identifier of this currency's balance. Example: `"bal_01KEZF7C00DE593X12REV5EFHZ"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `held_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `merchant_id` | Required | string | Merchant whose balance this is. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `observed_at` | Required | string | When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payouts_enabled` | Required | boolean | Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. |
| `pending_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. |
| `pending_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reserve_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BalanceListResponse.meta

Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used to produce this response. |
| `history` | Optional | [MoneyMovementHistoryMeta](../models/MoneyMovementHistoryMeta.md#moneymovementhistorymeta) | How complete Flint's history for this list is. history is omitted when Flint's history for this list is complete. How complete the history in a money movement list is and when it was last reconciled. `history`: [field definitions](../models/BalanceListResponse.md#balancelistresponsemetahistory). |
| `idempotency_replayed` | Optional | boolean | Whether this response replays a stored result for the supplied Idempotency-Key. |
| `trace_id` | Optional | string | Trace identifier to include when contacting Flint about this request. Example: `"0123456789abcdef0123456789abcdef"`. |
| `warnings` | Optional | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) | Conditions that need attention even though the request succeeded. `warnings[]`: [field definitions](../models/DisputeResponse.md#disputeresponsemetawarnings). |

### BalanceListResponse.meta.history

How complete Flint's history for this list is. history is omitted when Flint's history for this list is complete. How complete the history in a money movement list is and when it was last reconciled.

Field definitions: [shared fields](MoneyMovementHistoryMetaInput.md#moneymovementhistorymetainput).

### BalanceListResponse.meta.warnings[]

Field definitions: [DisputeResponse.meta.warnings[]](../models/DisputeResponse.md#disputeresponsemetawarnings).

