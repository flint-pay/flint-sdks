
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnPolicyInput } from './ReturnPolicyInput.js';

export type ListReturnPoliciesResponseInput = { "data": Array<ReturnPolicyInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
