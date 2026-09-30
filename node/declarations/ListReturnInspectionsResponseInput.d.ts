
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnInspectionInput } from './ReturnInspectionInput.js';

export type ListReturnInspectionsResponseInput = { "data": Array<ReturnInspectionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
