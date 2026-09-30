
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { SubscriptionStatusCountsInput } from './SubscriptionStatusCountsInput.js';

export type SubscriptionSnapshotMetricsInput = { "arr_by_currency"?: Array<MoneyValueInput>; "mrr_by_currency"?: Array<MoneyValueInput>; "status_counts": SubscriptionStatusCountsInput; };
