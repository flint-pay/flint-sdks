
import type { Bundle } from './Bundle.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BundleResponse = { "data": Bundle; "meta"?: ResponseMeta; "request_id"?: string; };
