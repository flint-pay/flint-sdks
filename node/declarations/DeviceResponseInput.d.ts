
import type { DeviceInput } from './DeviceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DeviceResponseInput = { "data": DeviceInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
