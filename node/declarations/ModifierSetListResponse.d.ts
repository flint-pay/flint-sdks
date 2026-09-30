
import type { ModifierSet } from './ModifierSet.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ModifierSetListResponse = { "data": Array<ModifierSet>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
