
import type { FraudWarningInput } from './FraudWarningInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FraudWarningResponseInput = { "data": FraudWarningInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
