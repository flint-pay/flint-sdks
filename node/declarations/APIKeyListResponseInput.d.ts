
import type { APIKeyInput } from './APIKeyInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type APIKeyListResponseInput = { "data": Array<APIKeyInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
