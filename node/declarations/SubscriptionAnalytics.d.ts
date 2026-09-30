
import type { SubscriptionSnapshotMetrics } from './SubscriptionSnapshotMetrics.js';
import type { SubscriptionWindowMetrics } from './SubscriptionWindowMetrics.js';

export type SubscriptionAnalytics = { "range": "today" | "last_7_days" | "last_30_days" | (string & {}); "snapshot_metrics": SubscriptionSnapshotMetrics; "timezone": string; "window_metrics": SubscriptionWindowMetrics; };
