
import type { APIKey } from './APIKey.js';

export type DeveloperSandboxWithAPIKey = { "api_key"?: APIKey; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "is_default": boolean; "name": string; "sandbox_id": string; "secret_key"?: string; "status": "active" | "archived" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
