
import type { SubscriptionPaymentRetryFailure } from './SubscriptionPaymentRetryFailure.js';

export type SubscriptionPaymentRetry = { /** RFC3339 timestamp. Format: date-time. */ "completed_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "failure"?: SubscriptionPaymentRetryFailure; "idempotency_key": string; "order_id"?: string; "payment_attempt_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "started_at"?: string; "status": "pending" | "processing" | "succeeded" | "failed" | (string & {}); "subscription_id": string; "subscription_payment_retry_id": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; };
