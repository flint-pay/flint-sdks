import type { InputValue } from '../runtime.js';
import type { CreateInventoryAllocationPolicyRequestInput } from './CreateInventoryAllocationPolicyRequestInput.js';

export type InventoryAllocationPoliciesCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInventoryAllocationPolicyRequestInput>; };
