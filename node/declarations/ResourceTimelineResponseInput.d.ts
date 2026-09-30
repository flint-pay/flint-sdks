
import type { ResourceTimelineInput } from './ResourceTimelineInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ResourceTimelineResponseInput = { "data": ResourceTimelineInput; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
