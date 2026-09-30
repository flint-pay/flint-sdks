
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnResolution } from './ReturnResolution.js';

export type CancelReturnResolutionResponse = { "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; };
