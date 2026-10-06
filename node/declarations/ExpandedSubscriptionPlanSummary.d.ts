
import type { MoneyValue } from './MoneyValue.js';
import type { SubscriptionPlanLineItem } from './SubscriptionPlanLineItem.js';

export type ExpandedSubscriptionPlanSummary = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** Format: int32. */ "billing_interval_count": number; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "description"?: string; "line_items"?: Array<SubscriptionPlanLineItem>; "name": string; "setup_fee_money"?: MoneyValue; "status": "active" | "archived" | (string & {}); "subscription_plan_id": string; /** Format: int32. */ "trial_period_days"?: number; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
