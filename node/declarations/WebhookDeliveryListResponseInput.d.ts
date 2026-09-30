
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookDeliveryInput } from './WebhookDeliveryInput.js';

export type WebhookDeliveryListResponseInput = { "data": Array<WebhookDeliveryInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
