
import type { APIKey } from './APIKey.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type APIKeyResponse = { "data": APIKey; "meta"?: ResponseMeta; "request_id"?: string; };
