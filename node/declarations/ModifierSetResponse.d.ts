
import type { ModifierSet } from './ModifierSet.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ModifierSetResponse = { "data": ModifierSet; "meta"?: ResponseMeta; "request_id"?: string; };
