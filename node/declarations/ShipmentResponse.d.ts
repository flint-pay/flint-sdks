
import type { ResponseMeta } from './ResponseMeta.js';
import type { Shipment } from './Shipment.js';

export type ShipmentResponse = { "data": Shipment; "meta"?: ResponseMeta; "request_id"?: string; };
