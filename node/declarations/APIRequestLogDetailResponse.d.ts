
import type { APIRequestLogDetail } from './APIRequestLogDetail.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type APIRequestLogDetailResponse = { "data": APIRequestLogDetail; "meta"?: ResponseMeta; "request_id"?: string; };
