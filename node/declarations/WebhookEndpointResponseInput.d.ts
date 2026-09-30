
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { WebhookEndpointInput } from './WebhookEndpointInput.js';

export type WebhookEndpointResponseInput = { "data": WebhookEndpointInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
