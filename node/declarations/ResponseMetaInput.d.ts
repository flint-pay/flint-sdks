
import type { ResponseWarningInput } from './ResponseWarningInput.js';

export type ResponseMetaInput = { "api_version"?: string; "idempotency_replayed"?: boolean; "request_id"?: string; "trace_id"?: string; "warnings"?: Array<ResponseWarningInput>; };
