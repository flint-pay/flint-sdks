import type { InputValue } from '../runtime.js';


export type InventoryAllocationPoliciesRemoveInput = { "inventory_allocation_policy_id": InputValue<string>; /** minimum: 1. */ "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
