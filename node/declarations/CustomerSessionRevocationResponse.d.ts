
import type { CustomerSessionRevocation } from './CustomerSessionRevocation.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerSessionRevocationResponse = { "data": CustomerSessionRevocation; "meta"?: ResponseMeta; "request_id"?: string; };
