[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalancesListResponse200

A page of `Balance` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Balance](../models/Balance.md#balance) | `data[]`: [field definitions](../models/BalancesListResponse200.md#balanceslistresponse200data). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. `meta`: [field definitions](../models/BalancesListResponse200.md#balanceslistresponse200meta). |
| `next_page_token` | Optional | string | Omitted because all currency balances fit on one page. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BalancesListResponse200.data[]

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. |
| `available_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_id` | Required | string |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `held_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `merchant_id` | Required | string |  |
| `observed_at` | Required | string | When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: `date-time`. |
| `payouts_enabled` | Required | boolean |  |
| `pending_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. |
| `pending_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reserve_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BalancesListResponse200.meta

Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string |  |
| `history` | Optional | [MoneyMovementHistoryMeta](../models/MoneyMovementHistoryMeta.md#moneymovementhistorymeta) | How complete the history in a money movement list is, with the earliest available and latest reconciled times. |
| `idempotency_replayed` | Optional | boolean |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `trace_id` | Optional | string |  |
| `warnings` | Optional | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) |  |

