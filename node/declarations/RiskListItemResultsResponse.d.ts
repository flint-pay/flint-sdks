
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskListItemResultsData } from './RiskListItemResultsData.js';

export type RiskListItemResultsResponse = { "data": RiskListItemResultsData; "meta"?: ResponseMeta; "request_id"?: string; };
