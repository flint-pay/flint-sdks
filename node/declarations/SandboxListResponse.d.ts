
import type { DeveloperSandbox } from './DeveloperSandbox.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type SandboxListResponse = { "data": Array<DeveloperSandbox>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
