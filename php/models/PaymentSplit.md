[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplit

A top-level child of a payment intent dividing the collecting merchant's payment funds with one seller. Both parties read this same resource with their own credentials.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The admitted amount, or its final amount set at capture. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_reason` | Optional | string | Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`. |
| `collecting_merchant_id` | Required | string | The merchant of record that collected the payment. |
| `created_at` | Required | string | When the payment's create recorded the split. Format: `date-time`. |
| `description` | Optional | string | The collecting merchant's description, shown to the seller. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: `255`. |
| `failure_reason` | Optional | string | Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`. |
| `funds_available_at` | Required | string or null | When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: `date-time`. |
| `partner_app_id` | Required | string | The collecting merchant's partner app. |
| `partner_app_install_id` | Required | string | The seller's install of the app. |
| `payment_intent_id` | Required | string | The collecting merchant's payment. Sellers can read the split, but not the payment. |
| `payment_split_id` | Required | string | Unique identifier for the split. |
| `pending_reason` | Optional | string | Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`. |
| `reversals` | Required | Array of [PaymentSplitReversal](../models/PaymentSplitReversal.md#paymentsplitreversal) | Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. `reversals[]`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversals). |
| `reversed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Reversals' total amount minus their reinstated amounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_merchant_id` | Required | string | The merchant receiving the split. |
| `shortfall_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When the split reached the seller's balance. Present when succeeded. Format: `date-time`. |
| `updated_at` | Required | string | When the split last changed. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### PaymentSplit.reversals[]

Field definitions: [PaymentIntentResponse.data.splits[].reversals[]](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversals).

