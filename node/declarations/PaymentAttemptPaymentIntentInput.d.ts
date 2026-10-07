
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentErrorSummaryInput } from './PaymentErrorSummaryInput.js';

export type PaymentAttemptPaymentIntentInput = { "amount_money": MoneyValueInput; /** Capture is unavailable at or after this time, even if the payment still has requires_capture status. Format: date-time. */ "authorization_expires_at"?: string | globalThis.Date; /** Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. */ "capturable_money"?: MoneyValueInput; "last_payment_error"?: PaymentErrorSummaryInput; "payment_intent_id": string; "status": "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired"; "tip_money": MoneyValueInput; };
