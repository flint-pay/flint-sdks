
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskList } from './RiskList.js';

export type RiskListResourceResponse = { "data": RiskList; "meta"?: ResponseMeta; "request_id"?: string; };
