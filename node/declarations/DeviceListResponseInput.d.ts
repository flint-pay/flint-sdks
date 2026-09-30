
import type { DeviceInput } from './DeviceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DeviceListResponseInput = { "data": Array<DeviceInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
