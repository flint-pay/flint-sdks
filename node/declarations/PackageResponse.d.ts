
import type { Package } from './Package.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PackageResponse = { "data": Package; "meta"?: ResponseMeta; "request_id"?: string; };
