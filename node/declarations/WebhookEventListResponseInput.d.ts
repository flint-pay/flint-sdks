
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookEventInput } from './WebhookEventInput.js';

export type WebhookEventListResponseInput = { "data": Array<WebhookEventInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
