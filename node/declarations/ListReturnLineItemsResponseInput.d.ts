
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnLineItemInput } from './ReturnLineItemInput.js';

export type ListReturnLineItemsResponseInput = { "data": Array<ReturnLineItemInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
