
import type { MoneyValueInput } from './MoneyValueInput.js';

export type SubscriptionWindowMetricsInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "canceled_subscriptions": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "new_subscriptions": string; "subscription_collected_money_by_currency"?: Array<MoneyValueInput>; };
