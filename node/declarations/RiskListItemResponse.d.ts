
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskListItem } from './RiskListItem.js';

export type RiskListItemResponse = { "data": RiskListItem; "meta"?: ResponseMeta; "request_id"?: string; };
