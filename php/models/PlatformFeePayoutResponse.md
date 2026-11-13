[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeePayoutResponse

A response containing `PlatformFeePayout` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PlatformFeePayout](../models/PlatformFeePayout.md#platformfeepayout) | Resource, collection, or operation result returned by this request. A payout from your partner app's platform fee balance to your merchant balance. Owned by the merchant that owns the partner app. `data`: [field definitions](../models/PlatformFeePayoutResponse.md#platformfeepayoutresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PlatformFeePayoutResponse.data

Resource, collection, or operation result returned by this request. A payout from your partner app's platform fee balance to your merchant balance. Owned by the merchant that owns the partner app.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount transferred to your merchant balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_transaction_id` | Optional | string | The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `created_at` | Required | string | When Flint prepared the payout. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_reason` | Optional | string | Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`. |
| `partner_app_id` | Required | string | The partner app whose fee balance funded the payout. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `platform_fee_payout_id` | Required | string | Unique identifier for the platform fee payout. Example: `"pfpo_01KEZF7C00H58B147FK286D4A4"`. |
| `status` | Required | string | Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `succeeded_at` | Optional | string | When the transfer succeeded. Present only when status is succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### PlatformFeePayoutResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

