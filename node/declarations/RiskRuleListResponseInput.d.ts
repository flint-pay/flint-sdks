
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { RiskRuleInput } from './RiskRuleInput.js';

export type RiskRuleListResponseInput = { "data": Array<RiskRuleInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
