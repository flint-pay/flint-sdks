
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookDeliveryAction } from './WebhookDeliveryAction.js';

export type WebhookDeliveryActionResponse = { "data": WebhookDeliveryAction; "meta"?: ResponseMeta; "request_id"?: string; };
