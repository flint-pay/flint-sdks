
import type { FeedbackReportInput } from './FeedbackReportInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FeedbackReportListResponseInput = { "data": Array<FeedbackReportInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
