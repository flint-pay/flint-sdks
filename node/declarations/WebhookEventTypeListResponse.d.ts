
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookEventType } from './WebhookEventType.js';

export type WebhookEventTypeListResponse = { "data": Array<WebhookEventType>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
