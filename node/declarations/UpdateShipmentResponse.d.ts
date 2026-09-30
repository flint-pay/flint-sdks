
import type { ResponseMeta } from './ResponseMeta.js';
import type { UpdateShipmentResult } from './UpdateShipmentResult.js';

export type UpdateShipmentResponse = { "data": UpdateShipmentResult; "meta"?: ResponseMeta; "request_id"?: string; };
