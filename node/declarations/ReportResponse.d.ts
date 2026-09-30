
import type { Report } from './Report.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ReportResponse = { "data": Report; "meta"?: ResponseMeta; "request_id"?: string; };
