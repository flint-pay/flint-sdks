
import type { DeveloperSandboxWithAPIKey } from './DeveloperSandboxWithAPIKey.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type SandboxWithAPIKeyResponse = { "data": DeveloperSandboxWithAPIKey; "meta"?: ResponseMeta; "request_id"?: string; };
