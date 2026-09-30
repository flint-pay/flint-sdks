
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnReason } from './ReturnReason.js';

export type CreateReturnReasonResponse = { "data": ReturnReason; "meta"?: ResponseMeta; "request_id"?: string; };
