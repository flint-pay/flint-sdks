
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookEventTypeInput } from './WebhookEventTypeInput.js';

export type WebhookEventTypeListResponseInput = { "data": Array<WebhookEventTypeInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
