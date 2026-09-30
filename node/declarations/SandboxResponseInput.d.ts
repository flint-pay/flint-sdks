
import type { DeveloperSandboxInput } from './DeveloperSandboxInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type SandboxResponseInput = { "data": DeveloperSandboxInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
