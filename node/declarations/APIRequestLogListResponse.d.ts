
import type { APIRequestLog } from './APIRequestLog.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type APIRequestLogListResponse = { "data": Array<APIRequestLog>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
