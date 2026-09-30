
import type { FeedbackReport } from './FeedbackReport.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FeedbackReportListResponse = { "data": Array<FeedbackReport>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
