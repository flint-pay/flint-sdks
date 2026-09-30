
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnDisposition } from './ReturnDisposition.js';

export type CancelReturnDispositionResponse = { "data": ReturnDisposition; "meta"?: ResponseMeta; "request_id"?: string; };
