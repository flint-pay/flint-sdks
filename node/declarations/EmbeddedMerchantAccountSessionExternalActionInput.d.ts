
import type { MerchantAccountSessionStripeLaunchInput } from './MerchantAccountSessionStripeLaunchInput.js';

export type EmbeddedMerchantAccountSessionExternalActionInput = { "kind": "embedded"; "launch_token": string; /** RFC3339 timestamp. Format: date-time. */ "launch_token_expires_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "provider_session_expires_at": string | globalThis.Date; "stripe": MerchantAccountSessionStripeLaunchInput; };
