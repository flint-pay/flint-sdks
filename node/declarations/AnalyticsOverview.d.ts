
import type { CountMetric } from './CountMetric.js';
import type { MoneyMetric } from './MoneyMetric.js';

export type AnalyticsOverview = { "active_subscriptions": CountMetric; "average_payment": MoneyMetric; "currencies"?: Array<string>; "gross_volume": MoneyMetric; "has_multiple_currencies": boolean; "net_volume": MoneyMetric; "new_customers": CountMetric; "payments_count": CountMetric; "range": "today" | "last_7_days" | "last_30_days" | (string & {}); "refunds_total": MoneyMetric; "timezone": string; };
