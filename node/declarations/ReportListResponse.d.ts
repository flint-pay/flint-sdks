
import type { Report } from './Report.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ReportListResponse = { "data": Array<Report>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
