
import type { ResponseMeta } from './ResponseMeta.js';
import type { Shipment } from './Shipment.js';

export type ShipmentListResponse = { "data": Array<Shipment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
