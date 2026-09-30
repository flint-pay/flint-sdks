
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookEndpoint } from './WebhookEndpoint.js';

export type WebhookEndpointListResponse = { "data": Array<WebhookEndpoint>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
