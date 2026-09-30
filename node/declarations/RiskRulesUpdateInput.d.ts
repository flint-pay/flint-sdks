import type { InputValue } from '../runtime.js';
import type { UpdateRiskRuleRequestInput } from './UpdateRiskRuleRequestInput.js';

export type RiskRulesUpdateInput = { "risk_rule_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateRiskRuleRequestInput>; };
