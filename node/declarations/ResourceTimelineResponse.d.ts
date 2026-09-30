
import type { ResourceTimeline } from './ResourceTimeline.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ResourceTimelineResponse = { "data": ResourceTimeline; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
