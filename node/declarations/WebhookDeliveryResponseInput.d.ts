
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookDeliveryInput } from './WebhookDeliveryInput.js';

export type WebhookDeliveryResponseInput = { "data": WebhookDeliveryInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
