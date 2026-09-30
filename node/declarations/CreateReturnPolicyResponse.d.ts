
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnPolicy } from './ReturnPolicy.js';

export type CreateReturnPolicyResponse = { "data": ReturnPolicy; "meta"?: ResponseMeta; "request_id"?: string; };
