
import type { Location } from './Location.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type LocationResponse = { "data": Location; "meta"?: ResponseMeta; "request_id"?: string; };
