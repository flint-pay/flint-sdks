
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnResolutionInput } from './ReturnResolutionInput.js';

export type ListReturnResolutionsResponseInput = { "data": Array<ReturnResolutionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
