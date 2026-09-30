
import type { Dispute } from './Dispute.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DisputeResponse = { "data": Dispute; "meta"?: ResponseMeta; "request_id"?: string; };
