
import type { ActionResult } from './ActionResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type ActionResponse = { "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; };
