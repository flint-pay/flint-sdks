
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskList } from './RiskList.js';

export type RiskListListResponse = { "data": Array<RiskList>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
