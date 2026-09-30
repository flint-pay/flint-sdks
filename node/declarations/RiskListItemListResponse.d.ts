
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskListItem } from './RiskListItem.js';

export type RiskListItemListResponse = { "data": Array<RiskListItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
