
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookDelivery } from './WebhookDelivery.js';

export type WebhookDeliveryListResponse = { "data": Array<WebhookDelivery>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
