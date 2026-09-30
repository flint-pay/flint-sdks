
import type { Capability } from './Capability.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CapabilityListResponse = { "data": Array<Capability>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
