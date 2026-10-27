[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Balance

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_by_source_type` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. `available_by_source_type{}`: [field definitions](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money). |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `available_money`: [field definitions](../models/Balance.md#balanceavailable_money). |
| `balance_id` | Required | string |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `held_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `held_money`: [field definitions](../models/Balance.md#balanceheld_money). |
| `merchant_id` | Required | string |  |
| `observed_at` | Required | string | When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: `date-time`. |
| `payouts_enabled` | Required | boolean |  |
| `pending_by_source_type` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. `pending_by_source_type{}`: [field definitions](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money). |
| `pending_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `pending_money`: [field definitions](../models/Balance.md#balancepending_money). |
| `reserve_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `reserve_money`: [field definitions](../models/Balance.md#balancereserve_money). |

### Balance.available_by_source_type{}

Field definitions: [AdjustGiftCardBalanceRequest.amount_money](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money).

### Balance.available_money

Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](SignedMoneyInput.md#signedmoneyinput).

### Balance.held_money

Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### Balance.pending_by_source_type{}

Field definitions: [AdjustGiftCardBalanceRequest.amount_money](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money).

### Balance.pending_money

Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](SignedMoneyInput.md#signedmoneyinput).

### Balance.reserve_money

Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

