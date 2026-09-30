
import type { DemoSession } from './DemoSession.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DemoSessionResponse = { "data": DemoSession; "meta"?: ResponseMeta; "request_id"?: string; };
