
import type { DisputeInput } from './DisputeInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DisputeListResponseInput = { "data": Array<DisputeInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
