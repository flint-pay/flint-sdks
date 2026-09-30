
import type { CapabilityInput } from './CapabilityInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CapabilityListResponseInput = { "data": Array<CapabilityInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
