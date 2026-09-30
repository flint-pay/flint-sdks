
import type { APIKeyInput } from './APIKeyInput.js';

export type DeveloperSandboxWithAPIKeyInput = { "api_key"?: APIKeyInput; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "is_default": boolean; "name": string; "sandbox_id": string; "secret_key"?: string; "status": "active" | "archived"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
