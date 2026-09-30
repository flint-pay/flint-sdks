
import type { CardDetails } from './CardDetails.js';

export type ExpandedPaymentMethodSummary = { "card"?: CardDetails; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "customer_id"?: string; "payment_method_id": string; "status": "pending" | "active" | "expired" | "removed" | "failed" | (string & {}); "type": "card" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
