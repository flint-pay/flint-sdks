
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReviewInput } from './ReviewInput.js';

export type ReviewListResponseInput = { "data": Array<ReviewInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
