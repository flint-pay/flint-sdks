
import type { FulfillmentNotificationInput } from './FulfillmentNotificationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FulfillmentNotificationListResponseInput = { "data": Array<FulfillmentNotificationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
