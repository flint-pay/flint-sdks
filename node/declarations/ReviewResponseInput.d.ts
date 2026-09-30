
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReviewInput } from './ReviewInput.js';

export type ReviewResponseInput = { "data": ReviewInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
