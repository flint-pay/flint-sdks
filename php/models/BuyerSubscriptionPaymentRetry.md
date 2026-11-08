[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetry

A retry of a past-due payment on the buyer's subscription. Includes, when available, the buyer's order and a failure they can act on. Omits the store's idempotency keys and payment attempt IDs.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intentslast_payment_error). |
| `order_id` | Optional | string |  |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. |
| `subscription_id` | Required | string |  |
| `subscription_payment_retry_id` | Required | string | Unique identifier for this subscription payment retry, prefixed `spr_`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### BuyerSubscriptionPaymentRetry.last_payment_error

Field definitions: [OrderResponse.data.active_payment_attempt.payment_intents[].last_payment_error](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intentslast_payment_error).

