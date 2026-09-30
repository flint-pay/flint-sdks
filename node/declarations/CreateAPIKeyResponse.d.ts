
import type { APIKeyWithSecret } from './APIKeyWithSecret.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreateAPIKeyResponse = { "data": APIKeyWithSecret; "meta"?: ResponseMeta; "request_id"?: string; };
