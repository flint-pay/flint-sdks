
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentNotificationResponse = { "data": FulfillmentNotification; "meta"?: ResponseMeta; "request_id"?: string; };
