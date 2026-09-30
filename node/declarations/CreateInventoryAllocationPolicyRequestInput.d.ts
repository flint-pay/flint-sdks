
import type { InventoryAllocationPolicyConfigurationInput } from './InventoryAllocationPolicyConfigurationInput.js';

export type CreateInventoryAllocationPolicyRequestInput = { "configuration": InventoryAllocationPolicyConfigurationInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; };
