
import type { Device } from './Device.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeviceResponse = { "data": Device; "meta"?: ResponseMeta; "request_id"?: string; };
