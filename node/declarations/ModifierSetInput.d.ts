
import type { ModifierSetGroupInput } from './ModifierSetGroupInput.js';

export type ModifierSetInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: never; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "merchant_id"?: never; "metadata"?: Record<string, string>; "modifier_groups"?: Array<ModifierSetGroupInput>; "modifier_set_id"?: never; "name": string; "status": "active" | "inactive" | "archived"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: never; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version"?: never; };
