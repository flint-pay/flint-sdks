[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetry

A retry of a past-due payment on the buyer's subscription. Includes, when available, its order, payment intent and a failure the buyer can act on. Includes a creating key only for the buyer's own namespace.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Required | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from your buyer namespace. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `order_id` | Optional | string | ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Optional | string | The payment intent this retry started. Omitted before charging begins or when no payment intent was created. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. |
| `subscription_id` | Required | string | ID of the past-due subscription whose payment this retry collects. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_payment_retry_id` | Required | string | Unique identifier for this subscription payment retry, prefixed `spr_`. Example: `"spr_01KEZF7C00YXMSBXGYEMYDD0AA"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

