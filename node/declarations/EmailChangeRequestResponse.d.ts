
import type { EmailChangeRequest } from './EmailChangeRequest.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type EmailChangeRequestResponse = { "data": EmailChangeRequest; "meta"?: ResponseMeta; "request_id"?: string; };
