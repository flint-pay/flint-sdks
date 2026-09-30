
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { RiskListInput } from './RiskListInput.js';

export type RiskListListResponseInput = { "data": Array<RiskListInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
