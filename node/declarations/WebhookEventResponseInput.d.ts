
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookEventInput } from './WebhookEventInput.js';

export type WebhookEventResponseInput = { "data": WebhookEventInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
