
import type { FraudWarning } from './FraudWarning.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FraudWarningListResponse = { "data": Array<FraudWarning>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
