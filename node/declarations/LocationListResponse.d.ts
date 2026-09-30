
import type { Location } from './Location.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type LocationListResponse = { "data": Array<Location>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
