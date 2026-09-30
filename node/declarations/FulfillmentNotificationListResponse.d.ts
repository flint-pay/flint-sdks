
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentNotificationListResponse = { "data": Array<FulfillmentNotification>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
