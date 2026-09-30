
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnProcessResult } from './ReturnProcessResult.js';

export type ProcessExistingReturnResponse = { "data": ReturnProcessResult; "meta"?: ResponseMeta; "request_id"?: string; };
