
import type { ModifierSetGroup } from './ModifierSetGroup.js';

export type ModifierSet = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "merchant_id"?: string; "metadata"?: Record<string, string>; "modifier_groups"?: Array<ModifierSetGroup>; "modifier_set_id": string; "name": string; "status": "active" | "inactive" | "archived" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version": string; };
