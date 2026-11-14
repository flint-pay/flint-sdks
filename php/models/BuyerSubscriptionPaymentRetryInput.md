[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetryInput

A retry of a past-due payment on the buyer's subscription. Includes, when available, its order, payment intent and a failure the buyer can act on. Omits the store's idempotency key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `order_id` | Optional | string | Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Optional | string | The payment intent this retry started. Omitted before charging begins or when no payment intent was created. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. |
| `subscription_id` | Required | string | Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_payment_retry_id` | Required | string | Unique identifier for this subscription payment retry, prefixed `spr_`. Example: `"spr_01KEZF7C00YXMSBXGYEMYDD0AA"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

