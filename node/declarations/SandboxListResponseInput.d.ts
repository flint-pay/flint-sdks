
import type { DeveloperSandboxInput } from './DeveloperSandboxInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type SandboxListResponseInput = { "data": Array<DeveloperSandboxInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
