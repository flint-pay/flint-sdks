
import type { CustomerInput } from './CustomerInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CustomerResponseInput = { "data": CustomerInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
