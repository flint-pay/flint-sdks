
import type { PayoutDestination } from './PayoutDestination.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PayoutDestinationResponse = { "data": PayoutDestination; "meta"?: ResponseMeta; "request_id"?: string; };
