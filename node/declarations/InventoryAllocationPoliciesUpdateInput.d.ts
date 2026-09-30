import type { InputValue } from '../runtime.js';
import type { UpdateInventoryAllocationPolicyRequestInput } from './UpdateInventoryAllocationPolicyRequestInput.js';

export type InventoryAllocationPoliciesUpdateInput = { "Idempotency-Key"?: InputValue<string>; "inventory_allocation_policy_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateInventoryAllocationPolicyRequestInput>; };
