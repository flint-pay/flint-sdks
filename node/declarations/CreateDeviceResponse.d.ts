
import type { CreateDeviceResult } from './CreateDeviceResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreateDeviceResponse = { "data": CreateDeviceResult; "meta"?: ResponseMeta; "request_id"?: string; };
