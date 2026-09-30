
import type { MerchantAccountSessionStripeLaunch } from './MerchantAccountSessionStripeLaunch.js';

export type EmbeddedMerchantAccountSessionExternalAction = { "kind": "embedded" | (string & {}); "launch_token": string; /** RFC3339 timestamp. Format: date-time. */ "launch_token_expires_at": string; /** RFC3339 timestamp. Format: date-time. */ "provider_session_expires_at": string; "stripe": MerchantAccountSessionStripeLaunch; };
