
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnResourceInput } from './ReturnResourceInput.js';

export type ListReturnsResponseInput = { "data": Array<ReturnResourceInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
