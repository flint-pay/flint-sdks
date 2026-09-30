
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { SubscriptionPlanLineItemInput } from './SubscriptionPlanLineItemInput.js';

export type ExpandedSubscriptionPlanSummaryInput = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; /** Format: int32. */ "billing_interval_count": number; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "description"?: string; "line_items"?: Array<SubscriptionPlanLineItemInput>; "name": string; "plan_id": string; "setup_fee_money"?: MoneyValueInput; "status": "active" | "archived"; /** Format: int32. */ "trial_period_days"?: number; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
