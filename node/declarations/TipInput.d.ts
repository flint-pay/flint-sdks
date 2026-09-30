
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { TipPaymentIntentAllocationInput } from './TipPaymentIntentAllocationInput.js';

export type TipInput = { "amount_money"?: MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "description"?: string; "effective_amount_money": MoneyValueInput; "metadata"?: Record<string, string>; "name"?: string; "order_tip_id": string; "payment_intent_allocations"?: Array<TipPaymentIntentAllocationInput>; /** multipleOf: 0.0001. */ "percent"?: number; "refunded_money": MoneyValueInput; "settled_amount_money": MoneyValueInput; "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
