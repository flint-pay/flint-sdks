
import type { MoneyValue } from './MoneyValue.js';
import type { PaymentSourceSummary } from './PaymentSourceSummary.js';

export type ExpandedPaymentIntentSummary = { "amount_money": MoneyValue; "capture_method"?: "automatic" | "manual" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "customer_id"?: string; "order_id"?: string; "payment_intent_id": string; "payment_source"?: PaymentSourceSummary; "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {}); "status": "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
