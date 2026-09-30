
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookEndpointInput } from './WebhookEndpointInput.js';

export type WebhookEndpointListResponseInput = { "data": Array<WebhookEndpointInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
