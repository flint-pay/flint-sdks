
import type { FraudWarning } from './FraudWarning.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FraudWarningResponse = { "data": FraudWarning; "meta"?: ResponseMeta; "request_id"?: string; };
