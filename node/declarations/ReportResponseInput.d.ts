
import type { ReportInput } from './ReportInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ReportResponseInput = { "data": ReportInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
