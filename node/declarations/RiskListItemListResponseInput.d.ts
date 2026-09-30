
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { RiskListItemInput } from './RiskListItemInput.js';

export type RiskListItemListResponseInput = { "data": Array<RiskListItemInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
