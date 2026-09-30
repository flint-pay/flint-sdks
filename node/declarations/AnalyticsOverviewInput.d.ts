
import type { CountMetricInput } from './CountMetricInput.js';
import type { MoneyMetricInput } from './MoneyMetricInput.js';

export type AnalyticsOverviewInput = { "active_subscriptions": CountMetricInput; "average_payment": MoneyMetricInput; "currencies"?: Array<string>; "gross_volume": MoneyMetricInput; "has_multiple_currencies": boolean; "net_volume": MoneyMetricInput; "new_customers": CountMetricInput; "payments_count": CountMetricInput; "range": "today" | "last_7_days" | "last_30_days"; "refunds_total": MoneyMetricInput; "timezone": string; };
