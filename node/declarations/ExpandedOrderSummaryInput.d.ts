
import type { PricingAmountsInput } from './PricingAmountsInput.js';
import type { SettlementAmountsInput } from './SettlementAmountsInput.js';

export type ExpandedOrderSummaryInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "customer_id"?: string; "fulfillment_status"?: "not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed"; "order_id": string; "order_number"?: string; "payment_intent_ids"?: Array<string>; "payment_status": "unpaid" | "partially_paid" | "paid"; "pricing_amounts": PricingAmountsInput; "refund_status": "none" | "partially_refunded" | "refunded"; "settlement_amounts": SettlementAmountsInput; "status": "open" | "closed"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
