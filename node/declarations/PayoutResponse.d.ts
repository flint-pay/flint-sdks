
import type { Payout } from './Payout.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PayoutResponse = { "data": Payout; "meta"?: ResponseMeta; "request_id"?: string; };
