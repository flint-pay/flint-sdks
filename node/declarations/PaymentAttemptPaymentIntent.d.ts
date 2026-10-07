
import type { MoneyValue } from './MoneyValue.js';
import type { PaymentErrorSummary } from './PaymentErrorSummary.js';

export type PaymentAttemptPaymentIntent = { "amount_money": MoneyValue; /** Capture is unavailable at or after this time, even if the payment still has requires_capture status. Format: date-time. */ "authorization_expires_at"?: string; /** Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. */ "capturable_money"?: MoneyValue; "last_payment_error"?: PaymentErrorSummary; "payment_intent_id": string; "status": "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired" | (string & {}); "tip_money": MoneyValue; };
