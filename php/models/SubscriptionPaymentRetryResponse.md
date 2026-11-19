[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryResponse

A response containing `SubscriptionPaymentRetry` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry) | Resource, collection, or operation result returned by this request. An attempt to collect a subscription's overdue payment. `data`: [field definitions](../models/SubscriptionPaymentRetryResponse.md#subscriptionpaymentretryresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPaymentRetryResponse.data

Resource, collection, or operation result returned by this request. An attempt to collect a subscription's overdue payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Required | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/BuyerSubscriptionPaymentRetryResponse.md#buyersubscriptionpaymentretryresponsedatalast_payment_error). |
| `order_id` | Optional | string | ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Optional | string | The payment intent this retry started. Omitted before charging begins or when no payment intent was created. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. |
| `subscription_id` | Required | string | ID of the past-due subscription whose payment this retry collects. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_payment_retry_id` | Required | string | Unique identifier for this subscription payment retry, prefixed `spr_`. Example: `"spr_01KEZF7C00YXMSBXGYEMYDD0AA"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### SubscriptionPaymentRetryResponse.data.last_payment_error

Field definitions: [BuyerSubscriptionPaymentRetryResponse.data.last_payment_error](../models/BuyerSubscriptionPaymentRetryResponse.md#buyersubscriptionpaymentretryresponsedatalast_payment_error).

### SubscriptionPaymentRetryResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

