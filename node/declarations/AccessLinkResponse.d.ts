
import type { AccessLink } from './AccessLink.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type AccessLinkResponse = { "data": AccessLink; "meta"?: ResponseMeta; "request_id"?: string; };
