
import type { APIRequestLogInput } from './APIRequestLogInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type APIRequestLogListResponseInput = { "data": Array<APIRequestLogInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
