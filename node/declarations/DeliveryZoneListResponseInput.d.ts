
import type { DeliveryZoneInput } from './DeliveryZoneInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DeliveryZoneListResponseInput = { "data": Array<DeliveryZoneInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
