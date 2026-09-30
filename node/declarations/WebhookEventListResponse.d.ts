
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookEvent } from './WebhookEvent.js';

export type WebhookEventListResponse = { "data": Array<WebhookEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
