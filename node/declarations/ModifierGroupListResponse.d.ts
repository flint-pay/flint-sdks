
import type { ModifierGroup } from './ModifierGroup.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ModifierGroupListResponse = { "data": Array<ModifierGroup>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
