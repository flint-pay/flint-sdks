
import type { CreateModifierSetGroupRequest } from './CreateModifierSetGroupRequest.js';

export type CreateModifierSetRequest = { /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "modifier_groups"?: Array<CreateModifierSetGroupRequest>; "name": string; "status"?: "active" | "inactive" | (string & {}); };
