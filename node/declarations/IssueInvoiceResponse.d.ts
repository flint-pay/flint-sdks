
import type { IssueInvoiceResult } from './IssueInvoiceResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type IssueInvoiceResponse = { "data": IssueInvoiceResult; "meta"?: ResponseMeta; "request_id"?: string; };
