[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeBalanceTransaction

One entry of a partner app's platform fee ledger. Entries keep their amounts; status, available_at and the payout link can be filled later.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | The signed effect on available_money plus pending_money: positive for money in, negative for money out. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_at` | Optional | string | When the entry becomes, or became, available. Absent while Flint hasn't verified the application fee that carries it. Format: `date-time`. |
| `created_at` | Required | string | When Flint recorded the entry. Format: `date-time`. |
| `description` | Optional | string | Display text, not for matching. |
| `occurred_at` | Required | string | When the movement happened. Format: `date-time`. |
| `partner_app_id` | Required | string | The partner app the entry belongs to. |
| `platform_fee_balance_transaction_id` | Required | string | Unique identifier for the balance transaction. |
| `platform_fee_id` | Optional | string | The fee the entry concerns, when it concerns one. |
| `platform_fee_payout_id` | Optional | string | The payout that carried the entry. Set once when a payout is prepared, and never changed. |
| `related_balance_transaction_ids` | Required | Array of string | Earlier entries this one is linked to. Empty when none. |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The Flint resource behind the entry, when it has one other than the fee. A reference to another resource by `resource_type` and `resource_id`. `related_resource`: [field definitions](../models/PlatformFeeBalanceTransactionResponse.md#platformfeebalancetransactionresponsedatarelated_resource). |
| `status` | Required | string | Whether the amount counts toward available_money yet. Values: `"pending"`, `"available"`. |
| `type` | Required | string | What the entry records. Can gain values; treat an unknown value as other. Values: [10 declared values](#platformfeebalancetransaction-type-values). |

#### PlatformFeeBalanceTransaction type values

- `"platform_fee"`
- `"reserve_hold"`
- `"reserve_release"`
- `"loss_coverage"`
- `"loss_coverage_reversal"`
- `"platform_fee_refund"`
- `"platform_fee_refund_reversal"`
- `"platform_fee_payout"`
- `"platform_fee_payout_reversal"`
- `"other"`

### PlatformFeeBalanceTransaction.related_resource

Field definitions: [PlatformFeeBalanceTransactionResponse.data.related_resource](../models/PlatformFeeBalanceTransactionResponse.md#platformfeebalancetransactionresponsedatarelated_resource).

