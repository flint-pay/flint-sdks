
import type { CardDetailsInput } from './CardDetailsInput.js';

export type ExpandedPaymentMethodSummaryInput = { "card"?: CardDetailsInput; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "customer_id"?: string; "payment_method_id": string; "status": "pending" | "active" | "expired" | "removed" | "failed"; "type": "card"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
