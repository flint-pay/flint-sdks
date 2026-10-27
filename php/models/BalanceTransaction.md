[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransaction

A change to the merchant's balance.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `balance_transaction_id` | Required | string |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `description` | Optional | string |  |
| `fee_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Flint fee for this balance movement, never a provider cost passed through. Charges are positive; returned fees are negative. A payment of 5000 with a fee of 175 has a net amount of 4825. A payout reversal returning a fee of 25 reports fee_money -25. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `merchant_id` | Required | string |  |
| `net_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Optional | string |  |
| `payout_id` | Optional | string | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. |
| `related_balance_transaction_ids` | Required | Array of string |  |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | A reference to another resource by `resource_type` and `resource_id`. |
| `status` | Required | string | Values: `"pending"`, `"available"`. |
| `type` | Required | string | Kind of balance movement. Unmapped movement types are returned as other. Values: [18 declared values](BalanceTransactionInput.md#balancetransactioninput-type-values). |

