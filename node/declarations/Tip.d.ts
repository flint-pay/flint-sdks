
import type { MoneyValue } from './MoneyValue.js';
import type { TipPaymentIntentAllocation } from './TipPaymentIntentAllocation.js';

export type Tip = { "amount_money"?: MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "description"?: string; "effective_amount_money": MoneyValue; "metadata"?: Record<string, string>; "name"?: string; "order_tip_id": string; "payment_intent_allocations"?: Array<TipPaymentIntentAllocation>; /** multipleOf: 0.0001. */ "percent"?: number; "refunded_money": MoneyValue; "settled_amount_money": MoneyValue; "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
