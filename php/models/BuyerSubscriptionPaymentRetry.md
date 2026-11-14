[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetry

A retry of a past-due payment on the buyer's subscription. Includes, when available, its order, payment intent and a failure the buyer can act on. Omits the store's idempotency key.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/BuyerSubscriptionPaymentRetryResponse.md#buyersubscriptionpaymentretryresponsedatalast_payment_error). |
| `order_id` | Optional | string | ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. |
| `payment_intent_id` | Optional | string | The payment intent this retry started. Omitted before charging begins or when no payment intent was created. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. |
| `subscription_id` | Required | string | ID of the past-due subscription whose payment this retry collects. |
| `subscription_payment_retry_id` | Required | string | Unique identifier for this subscription payment retry, prefixed `spr_`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### BuyerSubscriptionPaymentRetry.last_payment_error

Field definitions: [BuyerSubscriptionPaymentRetryResponse.data.last_payment_error](../models/BuyerSubscriptionPaymentRetryResponse.md#buyersubscriptionpaymentretryresponsedatalast_payment_error).

