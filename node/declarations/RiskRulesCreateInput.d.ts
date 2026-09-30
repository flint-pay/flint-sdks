import type { InputValue } from '../runtime.js';
import type { CreateRiskRuleRequestInput } from './CreateRiskRuleRequestInput.js';

export type RiskRulesCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateRiskRuleRequestInput>; };
