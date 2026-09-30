
import type { FeedbackReport } from './FeedbackReport.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FeedbackReportResponse = { "data": FeedbackReport; "meta"?: ResponseMeta; "request_id"?: string; };
