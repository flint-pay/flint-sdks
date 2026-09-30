import type { InputValue } from '../runtime.js';


export type ReturnPoliciesRemoveInput = { "return_policy_id": InputValue<string>; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
