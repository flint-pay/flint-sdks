[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeBalanceTransaction

One entry of a partner app's platform fee ledger. Entries keep their amounts; status, available_at and the payout link can be filled later.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The signed effect on available_money plus pending_money: positive for money in, negative for money out. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/PlatformFeeBalanceTransaction.md#platformfeebalancetransactionamount_money). |
| `available_at` | Optional | string | When the entry becomes, or became, available. Absent while Flint hasn't verified the application fee that carries it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When Flint recorded the entry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Display text, not for matching. |
| `occurred_at` | Required | string | When the movement happened. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `partner_app_id` | Required | string | The partner app the entry belongs to. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `platform_fee_balance_transaction_id` | Required | string | Unique identifier for the balance transaction. Example: `"pfbt_01KEZF7C0079KPKMAHC7C60G1T"`. |
| `platform_fee_id` | Optional | string | The fee the entry concerns, when it concerns one. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. |
| `platform_fee_payout_id` | Optional | string | The payout that carried the entry. Set once when a payout is prepared, and never changed. Example: `"pfpo_01KEZF7C00H58B147FK286D4A4"`. |
| `related_balance_transaction_ids` | Required | Array of string | Earlier entries this one is linked to. Empty when none. Items: Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The Flint resource behind the entry, when it has one other than the fee. A reference to another resource by `resource_type` and `resource_id`. |
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

### PlatformFeeBalanceTransaction.amount_money

The signed effect on available_money plus pending_money: positive for money in, negative for money out. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

