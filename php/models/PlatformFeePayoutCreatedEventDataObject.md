[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeePayoutCreatedEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount transferred to your merchant balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_transaction_id` | Optional | string | The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. |
| `created_at` | Required | string | When Flint prepared the payout. Format: `date-time`. |
| `failure_reason` | Optional | string | Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`. |
| `partner_app_id` | Required | string | The partner app whose fee balance funded the payout. |
| `platform_fee_payout_id` | Required | string | Unique identifier for the platform fee payout. |
| `status` | Required | string | Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `succeeded_at` | Optional | string | When the transfer succeeded. Present only when status is succeeded. Format: `date-time`. |
| `updated_at` | Required | string | When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

