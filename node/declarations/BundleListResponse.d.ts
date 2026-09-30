
import type { Bundle } from './Bundle.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BundleListResponse = { "data": Array<Bundle>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
