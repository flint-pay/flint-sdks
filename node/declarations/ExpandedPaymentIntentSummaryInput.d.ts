
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentSourceSummaryInput } from './PaymentSourceSummaryInput.js';

export type ExpandedPaymentIntentSummaryInput = { "amount_money": MoneyValueInput; "capture_method"?: "automatic" | "manual"; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "customer_id"?: string; "order_id"?: string; "payment_intent_id": string; "payment_source"?: PaymentSourceSummaryInput; "refund_status"?: "none" | "partially_refunded" | "refunded"; "status": "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
