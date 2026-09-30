
import type { PayoutInput } from './PayoutInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PayoutResponseInput = { "data": PayoutInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
