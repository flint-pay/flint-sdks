
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskRule } from './RiskRule.js';

export type RiskRuleListResponse = { "data": Array<RiskRule>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
