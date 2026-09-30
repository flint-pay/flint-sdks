
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnLineItem } from './ReturnLineItem.js';

export type ListReturnLineItemsResponse = { "data": Array<ReturnLineItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
