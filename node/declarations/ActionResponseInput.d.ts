
import type { ActionResultInput } from './ActionResultInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ActionResponseInput = { "data": ActionResultInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
