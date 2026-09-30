
import type { Package } from './Package.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PackageListResponse = { "data": Array<Package>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
