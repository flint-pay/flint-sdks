
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnReasonInput } from './ReturnReasonInput.js';

export type ListReturnReasonsResponseInput = { "data": Array<ReturnReasonInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
