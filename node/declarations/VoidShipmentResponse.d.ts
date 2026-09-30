
import type { ResponseMeta } from './ResponseMeta.js';
import type { VoidShipmentResult } from './VoidShipmentResult.js';

export type VoidShipmentResponse = { "data": VoidShipmentResult; "meta"?: ResponseMeta; "request_id"?: string; };
