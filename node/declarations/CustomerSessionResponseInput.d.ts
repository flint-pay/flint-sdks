
import type { CustomerSessionInput } from './CustomerSessionInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CustomerSessionResponseInput = { "data": CustomerSessionInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
