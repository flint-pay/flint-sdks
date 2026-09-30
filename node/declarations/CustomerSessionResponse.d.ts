
import type { CustomerSession } from './CustomerSession.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerSessionResponse = { "data": CustomerSession; "meta"?: ResponseMeta; "request_id"?: string; };
