
import type { RefundInput } from './RefundInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type RefundResponseInput = { "data": RefundInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
