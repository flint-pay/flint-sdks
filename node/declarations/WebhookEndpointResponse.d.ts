
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookEndpoint } from './WebhookEndpoint.js';

export type WebhookEndpointResponse = { "data": WebhookEndpoint; "meta"?: ResponseMeta; "request_id"?: string; };
