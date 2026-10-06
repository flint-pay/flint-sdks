
import type { CustomerVerification } from './CustomerVerification.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerVerificationResponse = { "data": CustomerVerification; "meta"?: ResponseMeta; "request_id"?: string; };
