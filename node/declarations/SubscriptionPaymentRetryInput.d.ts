
import type { SubscriptionPaymentRetryFailureInput } from './SubscriptionPaymentRetryFailureInput.js';

export type SubscriptionPaymentRetryInput = { /** RFC3339 timestamp. Format: date-time. */ "completed_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "failure"?: SubscriptionPaymentRetryFailureInput; "idempotency_key": string; "order_id"?: string; "payment_attempt_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "started_at"?: string | globalThis.Date; "status": "pending" | "processing" | "succeeded" | "failed"; "subscription_id": string; "subscription_payment_retry_id": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string | globalThis.Date; };
