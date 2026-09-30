
import type { FraudWarningInput } from './FraudWarningInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FraudWarningListResponseInput = { "data": Array<FraudWarningInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
