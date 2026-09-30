
import type { CreateModifierSetGroupRequestInput } from './CreateModifierSetGroupRequestInput.js';

export type CreateModifierSetRequestInput = { /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>; "name": string; "status"?: "active" | "inactive"; };
