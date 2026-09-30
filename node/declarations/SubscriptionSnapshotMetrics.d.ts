
import type { MoneyValue } from './MoneyValue.js';
import type { SubscriptionStatusCounts } from './SubscriptionStatusCounts.js';

export type SubscriptionSnapshotMetrics = { "arr_by_currency"?: Array<MoneyValue>; "mrr_by_currency"?: Array<MoneyValue>; "status_counts": SubscriptionStatusCounts; };
