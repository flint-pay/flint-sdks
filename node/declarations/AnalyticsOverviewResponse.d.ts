
import type { AnalyticsOverview } from './AnalyticsOverview.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type AnalyticsOverviewResponse = { "data": AnalyticsOverview; "meta"?: ResponseMeta; "request_id"?: string; };
