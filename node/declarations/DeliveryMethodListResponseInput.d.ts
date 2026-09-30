
import type { DeliveryMethodInput } from './DeliveryMethodInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DeliveryMethodListResponseInput = { "data": Array<DeliveryMethodInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
