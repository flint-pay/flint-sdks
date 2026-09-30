
import type { SubscriptionSnapshotMetricsInput } from './SubscriptionSnapshotMetricsInput.js';
import type { SubscriptionWindowMetricsInput } from './SubscriptionWindowMetricsInput.js';

export type SubscriptionAnalyticsInput = { "range": "today" | "last_7_days" | "last_30_days"; "snapshot_metrics": SubscriptionSnapshotMetricsInput; "timezone": string; "window_metrics": SubscriptionWindowMetricsInput; };
