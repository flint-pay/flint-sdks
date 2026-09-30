
import type { DisputeInput } from './DisputeInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DisputeResponseInput = { "data": DisputeInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
