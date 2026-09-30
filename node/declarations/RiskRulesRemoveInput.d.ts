import type { InputValue } from '../runtime.js';


export type RiskRulesRemoveInput = { "risk_rule_id": InputValue<string>; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
