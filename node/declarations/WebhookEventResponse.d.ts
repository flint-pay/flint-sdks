
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookEvent } from './WebhookEvent.js';

export type WebhookEventResponse = { "data": WebhookEvent; "meta"?: ResponseMeta; "request_id"?: string; };
