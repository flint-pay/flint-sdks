import type { InputValue } from '../runtime.js';


export type ModifierGroupsRemoveInput = { "modifier_group_id": InputValue<string>; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
