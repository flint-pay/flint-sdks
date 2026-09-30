
import type { APIKey } from './APIKey.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type APIKeyListResponse = { "data": Array<APIKey>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
