
import type { ReportInput } from './ReportInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ReportListResponseInput = { "data": Array<ReportInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
