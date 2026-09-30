
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookDeliveryAttemptInput } from './WebhookDeliveryAttemptInput.js';

export type WebhookDeliveryAttemptListResponseInput = { "data": Array<WebhookDeliveryAttemptInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
