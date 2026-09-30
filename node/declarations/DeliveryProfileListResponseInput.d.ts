
import type { DeliveryProfileInput } from './DeliveryProfileInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DeliveryProfileListResponseInput = { "data": Array<DeliveryProfileInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
