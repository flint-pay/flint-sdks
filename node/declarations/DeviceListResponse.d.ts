
import type { Device } from './Device.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeviceListResponse = { "data": Array<Device>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
