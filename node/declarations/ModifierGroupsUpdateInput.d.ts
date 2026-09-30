import type { InputValue } from '../runtime.js';
import type { UpdateModifierGroupRequestInput } from './UpdateModifierGroupRequestInput.js';

export type ModifierGroupsUpdateInput = { "modifier_group_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateModifierGroupRequestInput>; };
