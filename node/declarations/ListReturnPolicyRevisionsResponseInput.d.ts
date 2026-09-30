
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnPolicyRevisionInput } from './ReturnPolicyRevisionInput.js';

export type ListReturnPolicyRevisionsResponseInput = { "data": Array<ReturnPolicyRevisionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
