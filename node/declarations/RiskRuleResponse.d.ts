
import type { ResponseMeta } from './ResponseMeta.js';
import type { RiskRule } from './RiskRule.js';

export type RiskRuleResponse = { "data": RiskRule; "meta"?: ResponseMeta; "request_id"?: string; };
