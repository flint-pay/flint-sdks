
import type { ResponseWarning } from './ResponseWarning.js';

export type ResponseMeta = { "api_version"?: string; "idempotency_replayed"?: boolean; "request_id"?: string; "trace_id"?: string; "warnings"?: Array<ResponseWarning>; };
