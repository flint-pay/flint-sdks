
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookDeliveryAttempt } from './WebhookDeliveryAttempt.js';

export type WebhookDeliveryAttemptListResponse = { "data": Array<WebhookDeliveryAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
