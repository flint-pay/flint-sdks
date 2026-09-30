
import type { ModifierGroup } from './ModifierGroup.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ModifierGroupResponse = { "data": ModifierGroup; "meta"?: ResponseMeta; "request_id"?: string; };
