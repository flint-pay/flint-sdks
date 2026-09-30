
import type { PricingAmounts } from './PricingAmounts.js';
import type { SettlementAmounts } from './SettlementAmounts.js';

export type ExpandedOrderSummary = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "customer_id"?: string; "fulfillment_status"?: "not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed" | (string & {}); "order_id": string; "order_number"?: string; "payment_intent_ids"?: Array<string>; "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {}); "pricing_amounts": PricingAmounts; "refund_status": "none" | "partially_refunded" | "refunded" | (string & {}); "settlement_amounts": SettlementAmounts; "status": "open" | "closed" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
