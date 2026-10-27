[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetry

An attempt to collect a subscription's overdue payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `idempotency_key` | Required | string |  |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `order_id` | Optional | string |  |
| `order_payment_attempt_id` | Optional | string |  |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. |
| `subscription_id` | Required | string |  |
| `subscription_payment_retry_id` | Required | string |  |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

