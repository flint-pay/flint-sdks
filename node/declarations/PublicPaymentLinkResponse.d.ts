
import type { PublicPaymentLinkResult } from './PublicPaymentLinkResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PublicPaymentLinkResponse = { "data": PublicPaymentLinkResult; "meta"?: ResponseMeta; "request_id"?: string; };
