
import type { MoneyValue } from './MoneyValue.js';

export type ExpandedInvoiceSummary = { "collection_block_status"?: "none" | "inventory_blocked" | "resolved" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "customer_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "due_at"?: string; "invoice_id": string; "invoice_number"?: string; "is_overdue": boolean; "order_id"?: string; "outstanding_money": MoneyValue; "paid_money": MoneyValue; "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {}); "refunded_money": MoneyValue; "status": "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
