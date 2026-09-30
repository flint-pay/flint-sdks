
import type { DeveloperSandbox } from './DeveloperSandbox.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type SandboxResponse = { "data": DeveloperSandbox; "meta"?: ResponseMeta; "request_id"?: string; };
