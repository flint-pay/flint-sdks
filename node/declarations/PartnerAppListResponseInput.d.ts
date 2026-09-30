
import type { PartnerAppInput } from './PartnerAppInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PartnerAppListResponseInput = { "data": Array<PartnerAppInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
