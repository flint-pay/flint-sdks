
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnLineItem } from './ReturnLineItem.js';

export type GetReturnLineItemResponse = { "data": ReturnLineItem; "meta"?: ResponseMeta; "request_id"?: string; };
