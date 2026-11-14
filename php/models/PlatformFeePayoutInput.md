[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeePayoutInput

A payout from your partner app's platform fee balance to your merchant balance. Owned by the merchant that owns the partner app.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount transferred to your merchant balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_transaction_id` | Optional | string | The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `created_at` | Required | string | When Flint prepared the payout. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_reason` | Optional | string | Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`. |
| `partner_app_id` | Required | string | The partner app whose fee balance funded the payout. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `platform_fee_payout_id` | Required | string | Unique identifier for the platform fee payout. Example: `"pfpo_01KEZF7C00H58B147FK286D4A4"`. |
| `status` | Required | string | Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `succeeded_at` | Optional | string | When the transfer succeeded. Present only when status is succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

