
import type { DemoSessionAPIKey } from './DemoSessionAPIKey.js';

export type DemoSession = { "api_key": DemoSessionAPIKey; "demo_session_id": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at": string; "sandbox_id": string; };
