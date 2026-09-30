
import type { CreateShipmentResult } from './CreateShipmentResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreateShipmentResponse = { "data": CreateShipmentResult; "meta"?: ResponseMeta; "request_id"?: string; };
