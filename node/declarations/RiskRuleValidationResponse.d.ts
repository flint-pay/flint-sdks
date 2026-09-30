
import type { ResponseMeta } from './ResponseMeta.js';
import type { RuleValidation } from './RuleValidation.js';

export type RiskRuleValidationResponse = { "data": RuleValidation; "meta"?: ResponseMeta; "request_id"?: string; };
